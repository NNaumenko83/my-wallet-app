export const validateAddress = address => {
  const validAddressPattern = /^0x[a-fA-F0-9]{40}$/;
  return validAddressPattern.test(address);
};
