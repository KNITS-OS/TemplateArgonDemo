import PropTypes from "prop-types";

import { Card, CardHeader, CardBody, Spinner } from "reactstrap";

export const ChartPanel = ({ isLoading, chart, alert, title, subTitle }) => {
  return (
    <Card>
      <CardHeader>
        <h6 className="surtitle">{title}</h6>
        <h5 className="h3 mb-0">{subTitle}</h5>
      </CardHeader>
      <CardBody>
        <div className="chart">
          {isLoading ? (
            <>
              <Spinner />
            </>
          ) : chart ? (
            chart
          ) : (
            alert
          )}
        </div>
      </CardBody>
    </Card>
  );
};

ChartPanel.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  chart: PropTypes.node.isRequired,
  alert: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
