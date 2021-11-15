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
// core components
import SimpleHeader from "components/Headers/SimpleHeader";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useHistory } from "react-router";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Row,
} from "reactstrap";
import { Group } from "types/types";
import { pagination } from "utils/tableUtils";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { fetchGroups } from "../../../redux/features/groups/groupsSlice";

const { SearchBar } = Search;

const GroupsPage = () => {
  const history = useHistory();

  const groupDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    var { id } = e.target as HTMLButtonElement;
    history.push(`/admin/groups/group-details/${id}`);
  };

  const { groups = [] } = useAppSelector(state => state.groups);
  const dispatch = useAppDispatch();

  const formatActionButtonCell = (_: undefined, row: Group) => {
    const { id } = row;

    let groupId = id.toString();
    return (
      <>
        <Button
          id={groupId}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={groupDetails}
        >
          <span id={groupId} className="btn-inner--icon">
            <i id={groupId} className="ni ni-badge" />
          </span>
        </Button>
      </>
    );
  };

  const onFindGroups = () => {
    dispatch(fetchGroups());
  };

  return (
    <>
      {alert}
      <SimpleHeader name="React Tables" parentName="Tables" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">React Bootstrap Table 2</h3>
                <p className="text-sm mb-0">
                  This is an exmaple of data table using the well known
                  react-bootstrap-table2 plugin. This is a minimal setup in
                  order to get started fast.
                </p>
              </CardHeader>
              <ToolkitProvider
                data={groups}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden: true,
                  },
                  {
                    dataField: "name",
                    text: "Name",
                    sort: true,
                  },
                  {
                    dataField: "description",
                    text: "description",
                    sort: true,
                  },
                  {
                    dataField: "active",
                    text: "active",
                    sort: true,
                  },
                  {
                    dataField: "action",
                    text: "",
                    formatter: formatActionButtonCell,
                  },
                ]}
                search
              >
                {props => (
                  <div className="py-4 table-responsive">
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <Row>
                        <Col>
                          <label>
                            Search:
                            <SearchBar
                              className="form-control-sm"
                              {...props.searchProps}
                            />
                          </label>
                        </Col>
                        <Col>
                          <FormGroup>
                            <button
                              className="btn btn-info"
                              type="button"
                              onClick={onFindGroups}
                            >
                              Search
                            </button>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default GroupsPage;
