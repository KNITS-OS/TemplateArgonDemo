const lineChartReport = [
  { label: "Jan", value: 25 },
  { label: "Feb", value: 14 },
  { label: "Mar", value: 29 },
  { label: "Apr", value: 36 },
  { label: "May", value: 47 },
  { label: "Jun", value: 5 },
];

const barChartReport = [
  { month: "January", new: 46, old: 15 },
  { month: "February", new: 28, old: 12 },
  { month: "March", new: 38, old: 10 },
  { month: "April", new: 25, old: 11 },
  { month: "May", new: 26, old: 17 },
  { month: "June", new: 36, old: 12 },
  { month: "July", new: 33, old: 15 },
];

const dotChartReport = [
  { label: "May", value: 10 },
  { label: "Jun", value: 18 },
  { label: "Jul", value: 28 },
  { label: "Aug", value: 23 },
  { label: "Sep", value: 38 },
  { label: "Oct", value: 40 },
  { label: "Nov", value: 36 },
  { label: "Dec", value: 12 },
];

const doughnutChartReport = [
  { label: "Feb", value: 10 },
  { label: "Mar", value: 20 },
  { label: "Apr", value: 30 },
  { label: "May", value: 40 },
  { label: "Jun", value: 50 },
];

const pieChartReport = [
  { label: "Feb", value: 50 },
  { label: "Mar", value: 40 },
  { label: "Apr", value: 30 },
  { label: "May", value: 20 },
  { label: "Jun", value: 10 },
];

const multiBarChartReport = [
  { month: "January", new: 46, old: 15, recent: 10 },
  { month: "February", new: 28, old: 12, recent: 8 },
  { month: "March", new: 38, old: 10, recent: 12 },
  { month: "April", new: 25, old: 11, recent: 15 },
  { month: "May", new: 26, old: 17, recent: 20 },
  { month: "June", new: 36, old: 12, recent: 25 },
  { month: "July", new: 33, old: 15, recent: 30 },
];

const memberTurnoverReport = [
  { month: "January", onboarded: 46, offboarded: 15 },
  { month: "February", onboarded: 28, offboarded: 12 },
  { month: "March", onboarded: 38, offboarded: 10 },
  { month: "April", onboarded: 25, offboarded: 11 },
  { month: "May", onboarded: 26, offboarded: 17 },
  { month: "June", onboarded: 36, offboarded: 12 },
  { month: "July", onboarded: 33, offboarded: 15 },
];

const workforceReport = [
  { label: "January", value: 199 },
  { label: "February", value: 202 },
  { label: "March", value: 185 },
  { label: "April", value: 189 },
  { label: "May", value: 206 },
  { label: "June", value: 217 },
  { label: "July", value: 234 },
];

const distributionByGenderReport = [
  { label: "Male", value: 320 },
  { label: "Female", value: 306 },
];

const distributionByRoleReport = [
  { label: "Regional Transformation Manager", value: 17 },
  { label: "Country Transformation Manager", value: 28 },
  { label: "Advocate", value: 60 },
  { label: "Trainer", value: 75 },
  { label: "Sponsor", value: 45 },
];

const distributionByBusinessUnitReport = [
  { label: "Road Logistics", value: 44 },
  { label: "Air Logistics", value: 26 },
  { label: "Sea Logistics", value: 47 },
  { label: "Sales", value: 23 },
  { label: "Contract Logistics", value: 18 },
  { label: "Human Resources", value: 42 },
  { label: "QSHE", value: 31 },
  { label: "Marketing", value: 25 },
  { label: "Finance", value: 12 },
  { label: "Legal", value: 19 },
  { label: "IT", value: 43 },
  { label: "Administrative", value: 29 },
  { label: "National Management", value: 14 },
];

const distributionBySeniorityReport = [
  { label: "Up to 1", value: 45 },
  { label: "1-2", value: 58 },
  { label: "2-3", value: 33 },
  { label: "3-5", value: 81 },
  { label: "5+", value: 28 },
];

const distributionByAgeReport = [
  { label: "Up to 20", value: 26 },
  { label: "21-25", value: 89 },
  { label: "26-30", value: 56 },
  { label: "31-35", value: 38 },
  { label: "36-40", value: 25 },
  { label: "41+", value: 5 },
];

module.exports = {
  lineChartReport,
  barChartReport,
  dotChartReport,
  doughnutChartReport,
  pieChartReport,
  multiBarChartReport,
  memberTurnoverReport,
  workforceReport,
  distributionByGenderReport,
  distributionByRoleReport,
  distributionByBusinessUnitReport,
  distributionBySeniorityReport,
  distributionByAgeReport,
};
