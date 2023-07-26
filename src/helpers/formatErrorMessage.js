export const formatErrorMessage = (message) => {
  console.log("message:", message);
  console.log("message type:", typeof message);
  const indexOfParenthesis = message.indexOf("(");

  if (indexOfParenthesis === -1) {
    return message;
  }
  const result = message.substring(0, indexOfParenthesis);

  console.log(result);

  return result;
};
