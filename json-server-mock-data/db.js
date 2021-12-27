const employees = require("./employees.js");
const businessUnits = require("./business-units.js");
const countries = require("./countries.js");
const groups = require("./groups.js");

module.exports = () => ({
  employees,
  businessUnits,
  countries,
  groups,
});
