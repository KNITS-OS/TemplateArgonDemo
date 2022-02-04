const businessUnits = require("./business-units");
const charts = require("./charts");
const countries = require("./countries");
const employees = require("./employees");
const groups = require("./groups");
const worldMap = require("./world-map");

module.exports = () => ({
  employees,
  businessUnits,
  countries,
  groups,
  charts,
  worldMap,
});
