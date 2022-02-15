const stringToNumber = (value: string): number => {
  if (value === '') {
    return 0;
  }
  const newValue = Number(value.replace('.', '').replace(',', ''));
  return newValue / 100;
};

export default stringToNumber;
