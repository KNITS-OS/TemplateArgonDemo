const employees = require("./employees");
const businessUnits = require("./business-units");
const countries = require("./countries");
const groups = require("./groups");
const charts = require("./charts");

module.exports = () => ({
  employees,
  businessUnits,
  countries,
  groups,
  charts,
});
