import { stringToNumber, formatToLocale } from '../currencyUtils';

describe('String to number', () => {
  // [testString, expectedResult]
  const cases = [
    ['', 0],
    ['test string', 0],
    ['test 123 string', 123],
    ['1test 23', 123],
  ];
  test.each(cases)(
    'given the string %p, returns the number %p',
    (testString, expectedResult) => {
      // @ts-ignore
      const result = stringToNumber(testString);
      expect(result).toBe(expectedResult);
    }
  );
});

describe('Number to formatted currency string', () => {
  // [testNumber, expectedResult]
  const cases = [
    [0, '0'],
    [1000, '1,000'],
    [25680, '25,680'],
    [50089999, '50,089,999'],
  ];
  test.each(cases)(
    'given the number %p, returns the formatted string %p',
    (testNumber, expectedResult) => {
      // @ts-ignore
      const result = formatToLocale(testNumber);
      expect(result).toEqual(expectedResult);
    }
  );
});
