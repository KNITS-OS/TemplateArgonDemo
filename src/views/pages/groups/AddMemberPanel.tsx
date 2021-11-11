/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components
import Select, { MultiValue, SingleValue } from "react-select";
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Row,
} from "reactstrap";
import { OptionType } from "types/types";
import {
  getSelectBusinessUnits,
  getSelectCountries,
  getSelectEmployees,
} from "utils/fetchData";

interface Props {
  onChangeRole: (option: SingleValue<OptionType>) => void;
  onChangeCountry: (option: SingleValue<OptionType>) => void;
  onChangeBunit: (option: SingleValue<OptionType>) => void;
  onSelectCareMember: (option: MultiValue<OptionType>) => void;
}

const AddMemberPanel = ({
  onChangeRole,
  onChangeCountry,
  onChangeBunit,
  onSelectCareMember,
}: Props) => {
  const jobTitles: OptionType[] = [
    { value: "1", label: "product manager" },
    { value: "2", label: "qa engineer" },
    { value: "3", label: "hr consultant" },
    { value: "4", label: "office manager" },
    { value: "5", label: "sales representative" },
    { value: "6", label: "logistics consultant" },
  ];

  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Add Members</h3>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xl="12">
            <Row>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Job Title
                  </label>
                  <Select
                    onChange={item => onChangeRole(item)}
                    options={jobTitles}
                    getOptionValue={option => option.value}
                    getOptionLabel={option => option.label}
                  />
                </FormGroup>
              </Col>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Country
                  </label>
                  <Select
                    onChange={item => onChangeCountry(item)}
                    options={getSelectCountries}
                    getOptionValue={option => option.value}
                    getOptionLabel={option => option.label}
                  />
                </FormGroup>
              </Col>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Business Unit
                  </label>
                  <Select
                    onChange={item => onChangeBunit(item)}
                    options={getSelectBusinessUnits}
                    getOptionValue={option => option.value}
                    getOptionLabel={option => option.label}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Add members
                  </label>
                  <Select
                    onChange={item => onSelectCareMember(item)}
                    options={getSelectEmployees}
                    isMulti
                    getOptionValue={option => option.value}
                    getOptionLabel={option => option.label}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default AddMemberPanel;
