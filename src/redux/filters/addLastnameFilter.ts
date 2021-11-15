const addLastNameFilter = (lastNameParam: string | null) => {
  let lastName = null;

  if (lastNameParam) lastName = `eq.${lastNameParam}`;

  return lastName;
};

export default addLastNameFilter;
