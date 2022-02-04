import React, { useEffect } from "react";

import { Button } from "reactstrap";

import PropTypes from "prop-types";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { pagination, selectRow } from ".";

const { SearchBar } = Search;

export const ReactTable = ({
  columns,
  keyField,
  data,
  onViewDetailsClick,
  onDeleteItemClick,
  selectedRows,
  setSelectedRows,
}) => {
  const formatActionButtonCell = (_, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={onViewDetailsClick}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={onDeleteItemClick}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
  };

  useEffect(() => {
    const formatterColumn = columns.find(element => element.formatter !== undefined);
    formatterColumn.formatter = formatActionButtonCell;
  });

  return (
    <ToolkitProvider data={data} keyField={keyField} columns={columns} bootstrap4 search>
      {props => (
        <div className="py-4 table-responsive">
          <div
            id="datatable-basic_filter"
            className="dataTables_filter px-4 pb-1"
            style={{ display: "flex" }}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              Search:
              <SearchBar className="form-control-sm mr-3" placeholder="" {...props.searchProps} />
            </label>
            <Button
              className="btn btn-success"
              onClick={() => console.log("selectedRows", selectedRows)}
            >
              Workflow
            </Button>
          </div>
          <BootstrapTable
            {...props.baseProps}
            bootstrap4
            pagination={pagination}
            bordered={false}
            deleteRow
            selectRow={selectRow(setSelectedRows)}
          />
        </div>
      )}
    </ToolkitProvider>
  );
};

ReactTable.propTypes = {
  columns: PropTypes.array.isRequired,
  keyField: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onViewDetailsClick: PropTypes.func.isRequired,
  onDeleteItemClick: PropTypes.func.isRequired,
  selectedRows: PropTypes.array.isRequired,
  setSelectedRows: PropTypes.func.isRequired,
};
