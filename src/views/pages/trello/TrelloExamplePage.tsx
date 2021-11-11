import Board from "react-trello";
import { Container } from "reactstrap";
import { fullBoardExample } from "./TrelloData";

// storybook
// https://rcdexta.com/react-trello/?path=/story/basic-functions--full-board-example

const TrelloExamplePage = () => {
  return (
    // https://github.com/rcdexta/react-trello#properties
    <Container fluid>
      <Board
        data={fullBoardExample}
        draggable
        editable
        canAddLanes
        editLaneTitle
        style={{
          fontSize: 18,
          padding: "60px",
          height: "90vh",
          backgroundColor: "white",
        }}
      />
    </Container>
  );
};

export default TrelloExamplePage;
