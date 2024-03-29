// core react libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Card, CardHeader, Container, Row, Spinner } from "reactstrap";

import { selectBusinessUnitsAsList } from "redux/business-unit";
import { selectCountriesAsList } from "redux/countries";
import { deleteEmployee, searchEmployees, selectEmployeesState } from "redux/employees";

import { ErrorAlert } from "components/alerts";
import { GradientEmptyHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { EMPLOYEE_DETAILS } from "..";

import { employeesTableColumns, SearchEmployeesFilterPanel } from ".";

export const SearchEmployeesPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const employeesState = useSelector(selectEmployeesState);
  const countries = useSelector(selectCountriesAsList);
  const businessUnits = useSelector(selectBusinessUnitsAsList);
  const currentRole = "admin"; //TO GET FROM SELECTORS

  const [alert, setAlert] = useState(null);
  const [saveSent, setSaveSent] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(() => {
    if (employeesState.isError && saveSent) {
      setAlert(<ErrorAlert>{employeesState.errorMessage}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeesState.isError, employeesState.errorMessage]);

  const onClickSearchEmployees = filters => {
    dispatch(searchEmployees(filters));
    setSaveSent(true);
  };
  // @todo find a bettter place for this
  const jobTitles = [
    { value: "1", label: "product manager" },
    { value: "2", label: "qa engineer" },
    { value: "3", label: "hr consultant" },
    { value: "4", label: "office manager" },
    { value: "5", label: "sales representative" },
    { value: "6", label: "logistics consultant" },
  ];

  const goToEmployeeDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    history.push(`/${currentRole}${EMPLOYEE_DETAILS}/${id}`);
  };

  const removeEmployee = e => {
    const { id } = e.target;
    dispatch(deleteEmployee(id));
    setSaveSent(true);
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        {alert}
        <Row>
          <div className="col">
            <SearchEmployeesFilterPanel
              onSearchEmployees={onClickSearchEmployees}
              countries={countries}
              businessUnits={businessUnits}
              jobTitle={jobTitles}
            />
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Employees</h3>
                <p className="text-sm mb-0">Employees</p>
              </CardHeader>
              {employeesState.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={employeesState.entities}
                  keyField="id"
                  columns={employeesTableColumns}
                  onViewDetailsClick={goToEmployeeDetails}
                  onDeleteItemClick={removeEmployee}
                  selectedRows={selectedEmployees}
                  setSelectedRows={setSelectedEmployees}
                  searchBarPlaceholder="Filter results"
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
