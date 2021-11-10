import { ReactNode } from "react";

export interface Employee {
  id: number;
  pdmId: number;
  firstName: string;
  lastName: string;
  internationalName: string;
  title: string;
  email: string;
  businessUnit: string;
  managementGroup: string;
  companyCode: string;
  costCenter: string;
  country: string;
  birthDate: string;
  companyPhone: string;
  companyMobilePhone: string;
  gender: string;
  startDate: string;
  endDate: string;
  dateOfLeave: string;
  nationality: string;
  officeAddressCity: string;
  officeAddressStreet: string;
  onboardingDate: string;
  offboardingDate: string;
  groups: Group[];
  role: CareRole;
}

export interface CareMember {
  id: number;
  pdmId: number;
  firstName: string;
  lastName: string;
  internationalName: string;
  title: string;
  email: string;
  businessUnit: string;
  managementGroup: string;
  companyCode: string;
  costCenter: string;
  country: string;
  birthDate: string;
  companyPhone: string;
  companyMobilePhone: string;
  gender: string;
  startDate: string;
  endDate: string;
  dateOfLeave: string;
  nationality: string;
  officeAddressCountry: string;
  officeAddressCity: string;
  officeAddressStreet: string;
  onboardingDate: string;
  offboardingDate: string;
  groups: Group[];
  role: CareRole;
}

export interface CareRole {
  id: number;
  name: string;
}

export interface BusinessUnit {
  id: number;
  name: string;
}

export interface Group {
  id: number;
  name: string;
  active: boolean;
  members: number[];
  description: string;
}

export interface CountryList {
  code: string;
  code3: string;
  name: string;
  number: string;
}

export interface BestPractice {
  id: number;
  title: string;
  content: string;
}

export interface Role {
  id: number;
  name: string;
  rankedBefore: string;
  rankedAfter: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  rank: number;
}

export interface IRoute {
  collapse: boolean;
  name?: string;
  icon?: string;
  state?: string;
  views?: View[];
  global?: boolean;
  path?: string;
  component?: ReactNode;
  layout?: LayoutType;
}

export interface View {
  path: string;
  name: string;
  miniName: string;
  component: ReactNode;
  layout: LayoutType;
}

export type LayoutType = "/admin" | "/auth";

export type Theme = "light" | "dark";

export interface OptionType {
  value: string;
  label: string;
}

export interface IEvent {
  id: string;
  title: string;
  className: string;
  start: Date;
  allDay: boolean;
  description: string;
}

export interface IWidgetEvent {
  title: string;
  className: string;
  start: string | Date;
  end?: string | Date;
  allDay?: boolean;
}

export interface IDataTable {
  name: string;
  position: string;
  office: string;
  age: string;
  start_date: string;
  salary: string;
}

// export type HTMLElementEvent<T extends HTMLElement> = Event & {
//   target: T;
// };
