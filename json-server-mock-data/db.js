const businessUnits = require("./business-units");
const charts = require("./charts");
const countries = require("./countries");
const employees = require("./employees");
const groups = require("./groups");
const worldOverview = require("./world-map");

module.exports = () => ({
  employee: employees,
  "business-unit": businessUnits,
  country: countries,
  group: groups,
  chart: charts,
  "world-map": worldOverview,
});
