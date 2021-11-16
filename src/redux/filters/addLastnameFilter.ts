const addLastNameFilter = (lastNameParam: string) => {
  let lastName = null;

  if (lastNameParam) lastName = `eq.${lastNameParam}`;

  return lastName;
};

export default addLastNameFilter;
