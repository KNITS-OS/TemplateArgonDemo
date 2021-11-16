/**
 *
 * @param lastNameParam
 * @returns undefined or eq.lastNameParam
 * @description function that takes in a string and returns query param if it is defined
 */
const addLastNameFilter = (lastNameParam: string) => {
  let lastName = undefined;

  if (lastNameParam) lastName = `eq.${lastNameParam}`;

  return lastName;
};

export default addLastNameFilter;
