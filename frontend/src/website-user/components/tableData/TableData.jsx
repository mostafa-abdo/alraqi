import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

const TableData = (prop) => {
  const { columns, rows, numbers } = prop;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(numbers);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper sx={ { width: '100%', overflow: 'hidden', marginTop: "16px", borderRadius: "10px" } }>
        <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow style={ { boxShadow: "1px 1px 9px #F4F6F9" } }>
                { columns.map((column) => (
                  <TableCell
                    key={ column.id }
                    align={ column.align }
                    style={ { minWidth: column.minWidth, border: "none", fontSize: "16px", fontWeight: "500", lineHeight: "16px" } }
                  >
                    { column.label }
                  </TableCell>
                )) }
              </TableRow>
            </TableHead>
            <TableBody>
              { rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={ -1 } key={ row.id }>
                      { columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            style={ { border: "none", fontSize: "16px", lineHeight: "16px" } }
                            key={ column.id }
                            align={ column.align }>
                            { column.format && typeof value === 'number'
                              ? column.format(value)
                              : value }
                          </TableCell>
                        );
                      }) }
                    </TableRow>
                  );
                }) }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={ { backgroundColor: "#F4F6F9" } }
          rowsPerPageOptions={ [0] }
          component="div"
          count={ rows.length }
          rowsPerPage={ rowsPerPage }
          page={ page }
          onPageChange={ handleChangePage }
          onRowsPerPageChange={ handleChangeRowsPerPage }
        />
      </Paper>
    </div>
  )
};

export default TableData;