// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable<Subject> {
    getByTestId(testId: string): Cypress.Chainable<void>;
    getStore(reducerName: string): Cypress.Chainable<void>;
  }
}

Cypress.Commands.add('getByTestId', (testId) => {
  cy.get(`[data-cy='${testId}']`);
});

Cypress.Commands.add('getStore', (reducerName: string) => {
  cy.window().its('store').invoke('getState').its(reducerName);
});
