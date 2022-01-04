import React, { useEffect} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

// reactstrap components
import {
    Button
} from "reactstrap";


const { SearchBar } = Search;

const ReactTable = ({columns, keyField, data, onViewDetails, onDeleteItem}) => {

    const pagination = paginationFactory({
        page: 1,
        alwaysShowAllBtns: true,
        showTotal: true,
        withFirstAndLast: false,
        sizePerPageRenderer: ({ onSizePerPageChange }) => (
          <div className="dataTables_length" id="datatable-basic_length">
            <label>
              Show{" "}
              {
                <select
                  name="datatable-basic_length"
                  aria-controls="datatable-basic"
                  className="form-control form-control-sm"
                  onChange={e => onSizePerPageChange(e.target.value)}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              }{" "}
              entries.
            </label>
          </div>
        ),
      });

    const formatActionButtonCell = (cell, row) => {
        return (
          <>    
            <Button
              id={row.id}
              className="btn-icon btn-2"
              type="button"
              color="info"
              onClick={onViewDetails}
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
              onClick={onDeleteItem}
            >
              <span id={row.id} className="btn-inner--icon">
                <i id={row.id} className="ni ni-fat-remove" />
              </span>
            </Button>
          </>
        );
      };


     useEffect(() => {     
        const formatterColumn =columns.find( (element) => element.formatter!==undefined);
        formatterColumn.formatter=formatActionButtonCell;
    });


return (

    <ToolkitProvider
        data={data}
        keyField={keyField}
        columns={columns}
        search
        >

          {props => (
                  <div className="py-4 table-responsive">
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        Search:
                        <SearchBar
                          className="form-control-sm"
                          placeholder=""
                          {...props.searchProps}
                        />
                      </label>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                      deleteRow={true}
                    />
                  </div>
                )}   

    </ToolkitProvider>
    )

}
export default ReactTable;