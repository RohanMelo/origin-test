export const formatToLocale = (value: number): string => {
  return Intl.NumberFormat('en-US').format(value);
};

export const stringToNumber = (value: string): number => {
  return +value.replace(/[^0-9]/g, '');
};
