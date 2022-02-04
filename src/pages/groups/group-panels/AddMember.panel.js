import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { Button, FormGroup } from "reactstrap";

import { selectBusinessUnitsAsList } from "redux/business-units";
import { selectCountriesAsList } from "redux/countries";
import { searchEmployees } from "redux/employees";

import { SearchEmployeesFilterPanel } from "pages/users";

export const AddMemberPanel = ({ group, setGroup, selectedRows, setSelectedRows, tableRef }) => {
  const dispatch = useDispatch();

  const countries = useSelector(selectCountriesAsList);
  const businessUnits = useSelector(selectBusinessUnitsAsList);

  const jobTitles = [
    { value: 1, label: "product manager" },
    { value: 2, label: "qa engineer" },
    { value: 3, label: "hr consultant" },
    { value: 4, label: "office manager" },
    { value: 5, label: "sales representative" },
    { value: 6, label: "logistics consultant" },
  ];
  console.log("selectedRows", selectedRows);
  const onEmployeeAdd = selectedEmployees => {
    const employeeIds = selectedEmployees.map(employee => employee.id);
    setGroup({ ...group, members: [...group.members, ...employeeIds] });
    setSelectedRows([]);
    // @ts-ignore
    tableRef.current.selectionContext.selected = [];
  };

  const onClickSearchEmployees = filters => {
    dispatch(searchEmployees(filters));
  };
  // @todo make this find employees by filters
  return (
    <>
      <SearchEmployeesFilterPanel
        onSearchEmployees={onClickSearchEmployees}
        jobTitle={jobTitles}
        countries={countries}
        businessUnits={businessUnits}
      />
      <FormGroup>
        <Button color="success" onClick={() => onEmployeeAdd(selectedRows)}>
          Add Member To Group
        </Button>
      </FormGroup>
    </>
  );
};

AddMemberPanel.propTypes = {
  group: PropTypes.object,
  setGroup: PropTypes.func,
  selectedRows: PropTypes.array,
  setSelectedRows: PropTypes.func,
  tableRef: PropTypes.object,
};
