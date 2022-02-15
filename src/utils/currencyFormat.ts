import stringToNumber from './stringToNumber';

const currencyFormat = (value: string): string => {
  let newValue = value.replace(/\D/g, '');
  newValue = newValue.replace(/(\d)(\d{2})$/, '$1.$2');
  newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ',');
  return newValue;
};

const formatterUSD = new Intl.NumberFormat('en-US');
export const currencyDivision = (amount: string, months: number): string => {
  const formatted = stringToNumber(amount) / months;
  const fixed = Number(formatted.toFixed(2));
  const newValue = formatterUSD.format(fixed);
  return newValue;
};

export default currencyFormat;
