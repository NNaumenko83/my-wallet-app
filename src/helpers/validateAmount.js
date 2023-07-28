export const validateAmount = value => {
  const validAmountPattern = /^\d+(\.\d{0,18})?$/;
  return validAmountPattern.test(value);
};
