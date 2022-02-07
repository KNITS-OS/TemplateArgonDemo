/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { Col, Container, Row } from "reactstrap";

import { GradientEmptyHeader } from "components/headers";

import {
  LineChartPanel,
  StatisticsPanel,
  TurnoverChartPanel,
  WorkforceChartPanel,
  GenderChartPanel,
  AgeChartPanel,
  BusinessUnitChartPanel,
  RoleChartPanel,
  SeniorityChartPanel,
  BarChartPanel,
  DotChartPanel,
  PieChartPanel,
  DoughnutChartPanel,
  MultiBarChartPanel,
} from ".";

export const ChartsPage = () => {
  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <StatisticsPanel />

        <Row>
          <Col xl="6">
            <TurnoverChartPanel />
          </Col>
          <Col xl="6">
            <WorkforceChartPanel />
          </Col>
        </Row>

        <Row>
          <Col xl="4">
            <GenderChartPanel />
          </Col>
          <Col xl="4">
            <RoleChartPanel />
          </Col>
          <Col xl="4">
            <BusinessUnitChartPanel />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <AgeChartPanel />
          </Col>
          <Col xl="6">
            <SeniorityChartPanel />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <LineChartPanel />
          </Col>
          <Col xl="6">
            <BarChartPanel />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <DotChartPanel />
          </Col>
          <Col xl="6">
            <PieChartPanel />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <DoughnutChartPanel />
          </Col>
          <Col xl="6">
            <MultiBarChartPanel />
          </Col>
        </Row>
      </Container>
    </>
  );
};
