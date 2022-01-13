import { useSelector } from "react-redux";

import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

import { GradientEmptyHeader } from "components/Headers";

import {
  barChartExample,
  lineChartExample,
  dotChartExample,
  doughnutChartExample,
  pieChartExample,
  multiBarChartExample,
} from "variables/charts";

export const ChartsPage = () => {
  const chartsState = useSelector(state => state.chart);

  const lineChart = lineChartExample(chartsState.entities[0]);
  const barChart = barChartExample(chartsState.entities[1]);
  const dotChart = dotChartExample(chartsState.entities[2]);
  const doughnutChart = doughnutChartExample(chartsState.entities[3]);
  const pieChart = pieChartExample(chartsState.entities[4]);
  const multiBarChart = multiBarChartExample(chartsState.entities[5]);

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Overview</h6>
                <h5 className="h3 mb-0">Total sales</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={lineChart.data}
                    options={lineChart.options}
                    className="chart-canvas"
                    id="chart-sales"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Performance</h6>
                <h5 className="h3 mb-0">Total orders</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={barChart.data}
                    options={barChart.options}
                    className="chart-canvas"
                    id="chart-bars"
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
                <h6 className="surtitle">Growth</h6>
                <h5 className="h3 mb-0">Sales value</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={dotChart.data}
                    options={dotChart.options}
                    id="chart-points"
                    className="chart-canvas"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
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
                <h6 className="surtitle">Partners</h6>
                <h5 className="h3 mb-0">Affiliate traffic</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Pie
                    data={pieChart.data}
                    options={pieChart.options}
                    className="chart-canvas"
                    id="chart-pie"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
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
