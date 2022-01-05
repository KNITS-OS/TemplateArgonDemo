import paginationFactory from "react-bootstrap-table2-paginator";

export const selectRow = setSelectedRows => {
  return {
    mode: "checkbox",
    onSelect: (row, isSelect) => {
      // if select is true
      if (isSelect) {
        // adds this selected row to the selectedRows array
        setSelectedRows(oldRows => [...oldRows, row]);
        // select
        return true;
      } else {
        // removes this selected row from the selectedRows array
        setSelectedRows(oldRows =>
          oldRows.filter(oldRow => oldRow.id !== row.id),
        );
        // unselect
        return true;
      }
    },

    onSelectAll: (isSelect, rows) => {
      // if select is true
      if (isSelect) {
        // adds this selected row to the selectedRows array
        setSelectedRows(oldRows => [...oldRows, ...rows]);
        // select
        return;
      } else {
        // removes this selected row from the selectedRows array
        setSelectedRows(oldRows =>
          // if rows array includes oldRow remove it from state
          oldRows.filter(oldRow => !rows.includes(oldRow)),
        );
        // unselect
        return;
      }
    },
  };
};

export const pagination = paginationFactory({
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
