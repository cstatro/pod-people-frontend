export const cutOffOnListShowPage = str => {
  if (str.length > 47) {
    return str.slice(0, 47) + "...";
  } else {
    return str;
  }
};
