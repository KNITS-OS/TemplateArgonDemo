const employees = require("./employees");
const businessUnits = require("./business-units");
const countries = require("./countries");
const groups = require("./groups");

module.exports = () => ({
  employees,
  businessUnits,
  countries,
  groups,
});
