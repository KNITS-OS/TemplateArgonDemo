import { Bar, Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

import { doughnutChartExample, multiBarChartExample } from "variables/charts";

export const ChartsPage = () => {
  const chartsState = useSelector(state => state.chart);

  const doughnutChart = doughnutChartExample(chartsState.entities[3]);
  const multiBarChart = multiBarChartExample(chartsState.entities[5]);

  return (
    <>
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Users</h6>
                <h5 className="h3 mb-0">Audience overview</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Doughnut
                    data={doughnutChart.data}
                    options={doughnutChart.options}
                    className="chart-canvas"
                    id="chart-doughnut"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Overview</h6>
                <h5 className="h3 mb-0">Product comparison</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={multiBarChart.data}
                    options={multiBarChart.options}
                    className="chart-canvas"
                    id="chart-bar-stacked"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
