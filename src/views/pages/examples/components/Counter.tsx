import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import SimpleHeader from "components/Headers/SimpleHeader";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { decrement, increment } from "redux/features/example/counterSlice";

const Counter = () => {
  const { count } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <SimpleHeader name="Counter" parentName="Counters" />
      <Container className="mt--6" fluid>
        <Row className="justify-content-center">
          <Col className="card-wrapper ct-example" lg="8">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Counter</h3>
              </CardHeader>
              <CardBody>
                <p>{count}</p>
                <Button
                  color="default"
                  type="button"
                  onClick={() => dispatch(increment())}
                >
                  Increment
                </Button>
                <Button
                  color="warning"
                  type="button"
                  onClick={() => dispatch(decrement())}
                >
                  Decrement
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Counter;
