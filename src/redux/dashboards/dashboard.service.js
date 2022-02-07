import { httpCommon } from "redux/utils";

import {
  REPORT_MEMBERS_BY_AGE_ROUTE,
  REPORT_MEMBERS_BY_BUSINESS_UNITS_ROUTE,
  REPORT_MEMBERS_BY_GENDER_ROUTE,
  REPORT_MEMBERS_BY_ROLE_ROUTE,
  REPORT_MEMBERS_BY_SENIORITY_ROUTE,
  REPORT_MEMBERS_TURNOVER_ROUTE,
  REPORT_MEMBERS_WORKFORCE_ROUTE,
  REPORT_LINE_ROUTE,
  REPORT_BAR_ROUTE,
  REPORT_DOT_ROUTE,
  REPORT_DOUGHNUT_ROUTE,
  REPORT_PIE_ROUTE,
  REPORT_MULTIBAR_ROUTE,
} from "../common";

export const getTurnoverReport = async () => {
  return await httpCommon.get(`${REPORT_MEMBERS_TURNOVER_ROUTE}`);
};

const getWorkforceReport = async () => {
  return await httpCommon.get(`${REPORT_MEMBERS_WORKFORCE_ROUTE}`);
};

const getDistributionByGenderReport = async () => {
  return await httpCommon.get(`${REPORT_MEMBERS_BY_GENDER_ROUTE}`);
};

const getDistributionByRoleReport = async () => {
  return await httpCommon.get(`${REPORT_MEMBERS_BY_ROLE_ROUTE}`);
};

const getDistributionByBusinessUnitReport = async () => {
  return await httpCommon.get(`${REPORT_MEMBERS_BY_BUSINESS_UNITS_ROUTE}`);
};

const getDistributionByAgeReport = async () => {
  return await httpCommon.get(`${REPORT_MEMBERS_BY_AGE_ROUTE}`);
};

const getDistributionBySeniorityReport = async () => {
  return await httpCommon.get(`${REPORT_MEMBERS_BY_SENIORITY_ROUTE}`);
};

export const getLineReport = async () => {
  return await httpCommon.get(`${REPORT_LINE_ROUTE}`);
};
export const getBarReport = async () => {
  return await httpCommon.get(`${REPORT_BAR_ROUTE}`);
};
export const getDotReport = async () => {
  return await httpCommon.get(`${REPORT_DOT_ROUTE}`);
};

export const getDoughnutReport = async () => {
  return await httpCommon.get(`${REPORT_DOUGHNUT_ROUTE}`);
};

export const getPieReport = async () => {
  return await httpCommon.get(`${REPORT_PIE_ROUTE}`);
};

export const getMultiBarReport = async () => {
  return await httpCommon.get(`${REPORT_MULTIBAR_ROUTE}`);
};

export const dashboardService = {
  getTurnoverReport,
  getWorkforceReport,
  getDistributionByAgeReport,
  getDistributionByBusinessUnitReport,
  getDistributionByGenderReport,
  getDistributionByRoleReport,
  getDistributionBySeniorityReport,
  getLineReport,
  getBarReport,
  getDotReport,
  getDoughnutReport,
  getPieReport,
  getMultiBarReport,
};
