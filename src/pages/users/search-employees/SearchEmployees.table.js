export const employeesTableColumns = [
  {
    dataField: "id",
    text: "id",
    hidden: true,
  },
  {
    dataField: "firstName",
    text: "firstName",
    sort: true,
  },
  {
    dataField: "lastName",
    text: "lastName",
    sort: true,
  },
  {
    dataField: "internationalName",
    text: "int Name",
    sort: true,
  },
  {
    dataField: "title",
    text: "title",
    sort: true,
  },
  {
    dataField: "businessUnit",
    text: "bUnit",
    sort: true,
  },
  {
    dataField: "managementGroup",
    text: "Man Group",
    sort: true,
  },
  {
    dataField: "country",
    text: "country",
    sort: true,
  },
  {
    dataField: "action",
    text: "",
    formatter: () => {},
  },
];
