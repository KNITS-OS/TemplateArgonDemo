import { VectorMap } from "react-jvectormap";
import { useSelector } from "react-redux";

import { Card, CardBody, Col, Container, Row } from "reactstrap";

// import worldMill from "@react-jvectormap/world/dist/worldMill.json";

import { GradientEmptyHeader } from "components/headers";

export const WorldOverviewPage = () => {
  const worldOverviewState = useSelector(state => state.worldOverview);

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card>
              <CardBody className="pt-0">
                <VectorMap
                  containerClassName="vector-map"
                  className="vector-map"
                  style={{
                    height: "600px",
                  }}
                  map={"world_mill"}
                  zoomOnScroll={false}
                  backgroundColor="transparent"
                  regionStyle={{
                    initial: {
                      fill: "#e9ecef",
                      "fill-opacity": 0.8,
                      stroke: "none",
                      "stroke-width": 0,
                      "stroke-opacity": 1,
                    },
                    hover: {
                      fill: "#dee2e6",
                      "fill-opacity": 0.8,
                      cursor: "pointer",
                    },
                    selected: {
                      fill: "yellow",
                    },
                  }}
                  markerStyle={{
                    initial: {
                      fill: "#fb6340",
                      "stroke-width": 0,
                    },
                    hover: {
                      fill: "#0099da",
                      "stroke-width": 0,
                      border: 0,
                    },
                  }}
                  markers={worldOverviewState.entities[1]}
                  series={{
                    regions: [
                      {
                        values: worldOverviewState.entities[0],
                        scale: ["#ced4da", "#adb5bd"],
                        normalizeFunction: "polynomial",
                        attribute: "fill",
                      },
                    ],
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
