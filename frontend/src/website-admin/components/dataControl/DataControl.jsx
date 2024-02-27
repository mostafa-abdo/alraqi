import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useRef, useState } from 'react';
import './dataControl.scss';

const DataControl = (prop) => {
  const { columns, rows, numbers, navTitle, title, addNew_btn, categories } = prop;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(numbers);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // handle upload files
  const fileInputRef = useRef(null);
  const handleFileInput = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='data-control'>
      <div className='nav-header'>{ navTitle }</div>
      <div className='content'>
        <div className='header'>
          <h2 className='title'>{ title }</h2>
          <div className='save-btn'>حفظ</div>
        </div>
        <Paper sx={ { width: '100%', overflow: 'hidden', marginTop: "16px", borderRadius: "10px" } }>
          <TableContainer >
            <Table stickyHeader aria-label="sticky table">
              <TableHead style={ { backgroundColor: "#BBA664" } }>
                <TableRow>
                  { columns.map((column) => (
                    <TableCell
                      key={ column.id }
                      align={ column.align }
                      style={ { minWidth: column.minWidth, border: "none", fontSize: "16px", fontWeight: "500", lineHeight: "16px", backgroundColor: "#BBA664", color: "#fff" } }
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
        {/* add */ }
        <div className='addNew-btn'>
          <div className='btn'>
          { addNew_btn }
        </div>
        </div>
        <div className='upload_items' >
          {
            categories.map((item, index) => (
              <div className="item" key={ index }>
                <div className="header">
                  <h3><span>*</span>{ item }</h3>
                </div>
                <div className='upload_file' onClick={ handleFileInput }>
                  <input ref={ fileInputRef } type='file' style={ { display: "none" } } />
                  <img src='/upload.svg' alt='upload file' />
                  <h2>Upload Files</h2>
                  <p>PNG, JPG and GIF files are allowed</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default DataControl;