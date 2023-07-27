export const formatErrorMessage = message => {
  const indexOfParenthesis = message.indexOf("(");

  if (indexOfParenthesis === -1) {
    return message;
  }
  const result = message.substring(0, indexOfParenthesis);

  return result;
};
