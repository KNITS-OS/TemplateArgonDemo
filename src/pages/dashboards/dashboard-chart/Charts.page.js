import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

import {
  barChartExample,
  lineChartExample,
  dotChartExample,
  doughnutChartExample,
  pieChartExample,
  multiBarChartExample,
} from "variables/charts";

import GradientEmptyHeader from "components/Headers/GradientEmptyHeader";

const ChartsPage = () => {
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
                    data={lineChartExample.data}
                    options={lineChartExample.options}
                    id="chart-sales"
                    className="chart-canvas"
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
                    data={barChartExample.data}
                    options={barChartExample.options}
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
                    data={dotChartExample.data}
                    options={dotChartExample.options}
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
                    data={doughnutChartExample.data}
                    options={doughnutChartExample.options}
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
                    data={pieChartExample.data}
                    options={pieChartExample.options}
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
                    data={multiBarChartExample.data}
                    options={multiBarChartExample.options}
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

export default ChartsPage;
