/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// reactstrap components
import { Card, CardBody, Container, Row } from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

let mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

function WorldOverviewView() {
  return (
    <>
      
      {/* <SimpleHeader name="Vector maps" parentName="Maps" />
      <Container className="mt--6" fluid>      
      </Container> */}
       <span> Vector</span>
    </>
  );
}

export default WorldOverviewView;
