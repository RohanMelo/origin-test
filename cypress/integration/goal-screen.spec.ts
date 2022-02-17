/// <reference types="cypress" />
import dayjs from 'dayjs';

const initialValues = {
  currencyInput: '10,000',
  monthlyAmount: 10000,
  datePickerMonth: 'March',
  datePickerYear: '2022',
  depositsAmount: '$10000',
  depositsDescQt: '1 monthly deposit',
};

describe('Goal screen UI', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays logo on Navbar', () => {
    cy.getByTestId('nav-logo').should('be.visible');
  });

  it('Should display plan text with correct goal', () => {
    cy.getByTestId('plan-goal-text')
      .should('be.visible')
      .and('contain', "Let's plan your saving goal.");
  });

  it('Displays goal card', () => {
    cy.getByTestId('goal-card').should('be.visible');
  });

  it('Displays goal icon', () => {
    cy.getByTestId('goal-icon').should('be.visible');
  });

  it('Displays correct goal title and kind', () => {
    cy.contains(/buy a house/i).should('be.visible');
    cy.getByTestId('goal-kind').should('be.visible');
  });

  it('Displays input labels', () => {
    cy.contains(/total amount/i).should('be.visible');
    cy.contains(/reach goal by/i).should('be.visible');
  });

  it('Displays currency input with correct initial value and icon', () => {
    cy.getByTestId('currency-input')
      .should('be.visible')
      .and('have.value', initialValues.currencyInput);

    cy.getByTestId('currency-input-icon').should('be.visible');
  });

  it('Should be able to focus datepicker', () => {
    cy.getByTestId('datepicker-focusable')
      .invoke('attr', 'tabIndex')
      .should('equal', '0');
  });

  it('Displays date picker with correct initial value and icons', () => {
    cy.getByTestId('datepicker-container').should('exist');

    cy.getByTestId('datepicker-month-text')
      .should('be.visible')
      .and('contain', initialValues.datePickerMonth);
    cy.getByTestId('datepicker-year-text')
      .should('be.visible')
      .and('contain', initialValues.datePickerYear);

    cy.getByTestId('datepicker-decrement').should('be.visible');
    cy.getByTestId('datepicker-increment').should('be.visible');
  });

  it('Displays monthly amount with correct initial value', () => {
    cy.contains(/monthly amount/i).should('be.visible');

    cy.getByTestId('deposits-amount')
      .should('be.visible')
      .and('contain', initialValues.depositsAmount);
  });

  it('Displays deposit description with correct initial values', () => {
    cy.contains(initialValues.depositsDescQt).should('be.visible');

    cy.getByTestId('deposits-desc-amount')
      .should('be.visible')
      .and('contain', initialValues.currencyInput);

    cy.getByTestId('deposits-desc-reachdate')
      .should('be.visible')
      .and(
        'contain',
        `${initialValues.datePickerMonth}, ${initialValues.datePickerYear}`
      );
  });

  it('Displays confirm button', () => {
    cy.get('button').should('be.visible').and('contain', 'Confirm');
  });
});

describe('Goal screen redux and functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Store should have the right initial values', () => {
    cy.getStore('goal')
      .its('amount')
      .should('equal', initialValues.currencyInput);
    cy.getStore('goal')
      .its('monthlyAmount')
      .should('equal', initialValues.monthlyAmount);
    cy.getStore('goal').its('monthDiff').should('equal', 1);
  });

  it('Should be able to choose only future months', () => {
    cy.getByTestId('datepicker-decrement').click();
    cy.getStore('goal')
      .its('amount')
      .should('equal', initialValues.currencyInput);
    cy.getStore('goal').its('monthDiff').should('equal', 1);

    cy.getByTestId('deposits-amount')
      .should('be.visible')
      .and('contain', initialValues.monthlyAmount);
  });

  it('Should be able to increase Date and see correct values', () => {
    cy.getByTestId('datepicker-increment').click();
    cy.getStore('goal').its('monthDiff').should('equal', 2);
    cy.getStore('goal').its('monthlyAmount').should('equal', 5000);

    cy.getByTestId('deposits-amount')
      .should('be.visible')
      .and('contain', '$5000');
  });

  it('Should be able to increment and decrement dates using arrow keys', () => {
    cy.getByTestId('datepicker-focusable')
      .focus()
      .type('{rightArrow}{rightArrow}');
    cy.getStore('goal').its('monthDiff').should('equal', 3);
    cy.getStore('goal').its('monthlyAmount').should('equal', 3333.33);

    cy.getByTestId('deposits-amount')
      .should('be.visible')
      .and('contain', '$3333.33');

    cy.getByTestId('datepicker-focusable').focus().type('{leftArrow}');

    cy.getStore('goal').its('monthDiff').should('equal', 2);
    cy.getStore('goal').its('monthlyAmount').should('equal', 5000);

    cy.getByTestId('deposits-amount')
      .should('be.visible')
      .and('contain', '$5000');
  });

  it('Should be able to change amount in currency input', () => {
    cy.getByTestId('currency-input').clear();
    cy.getStore('goal').its('amount').should('equal', '0');
    cy.getByTestId('deposits-amount').contains('$0');
    cy.getByTestId('deposits-desc-amount').contains('$0');

    cy.getByTestId('currency-input').type('50567');
    cy.getStore('goal').its('amount').should('equal', '50,567');
    cy.getByTestId('deposits-amount').contains('$50567');
    cy.getByTestId('deposits-desc-amount').contains('$50,567');

    cy.getByTestId('datepicker-increment').click();
    cy.getByTestId('deposits-amount').contains('$25283.5');
    cy.getByTestId('deposits-desc-amount').contains('$50,567');
  });
});
