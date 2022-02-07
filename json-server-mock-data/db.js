const businessUnits = require("./business-units");
const charts = require("./charts");
const countries = require("./countries");
const employees = require("./employees");
const groups = require("./groups");
const worldOverview = require("./world-overview");

module.exports = () => ({
  employee: employees,
  "business-unit": businessUnits,
  country: countries,
  group: groups,
  chart: charts,
  "turnover-report": charts.memberTurnoverReport,
  "workforce-report": charts.workforceReport,
  "gender-report": charts.distributionByGenderReport,
  "business-unit-report": charts.distributionByBusinessUnitReport,
  "role-report": charts.distributionByRoleReport,
  "seniority-report": charts.distributionBySeniorityReport,
  "age-report": charts.distributionByAgeReport,
  "line-chart-report": charts.lineChartReport,
  "bar-chart-report": charts.barChartReport,
  "dot-chart-report": charts.dotChartReport,
  "doughnut-chart-report": charts.doughnutChartReport,
  "pie-chart-report": charts.pieChartReport,
  "multi-bar-chart-report": charts.multiBarChartReport,
  "world-map": worldOverview,
});
