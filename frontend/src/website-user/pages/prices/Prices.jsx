import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './prices.scss';

function createData(name, calories, fat, carbs, protein, plus1, plus2) {
  return { name, calories, fat, carbs, protein, plus1, plus2 };
}

const rows = [
  createData(1, "من جده الي مكه او العكس", "30.25$", 200.0, 200.0, 200.0, "30.10.2023"),
  createData(2, "من مكه الي الطائف او العكس", "30.25$", 200.0, 200.0, 200.0, "30.10.2023"),
  createData(3, "من جده الي الطائف او العكس", "30.25$", 200.0, 200.0, 200.0, "30.10.2023"),
  createData(4, "من جده الي المدينه او العكس ", "30.25$", 200.0, 200.0, 200.0, "30.10.2023"),
  createData(5, "من مكه الي المدينه او العكس ", "30.25$", 200.0, 200.0, 200.0, "30.10.2023"),
  createData(6, <div>استقبال من المطار الي داخل جده <br/><span style={{color:"#9094A0"}}>(قد تختلف الاسعار علي حسب بعد المشوار)</span></div>, "30.25$", 200.0, 200.0, 200.0, "30.10.2023"),
  createData(7, <div>استقبال من المطار الي داخل جده <br/><span style={{color:"#9094A0"}}>(قد تختلف الاسعار علي حسب بعد المشوار)</span></div>, "30.25$", 200.0, 200.0, 200.0, "30.10.2023"),
];

const Prices = () => {
  return (
    <div className='prices'>
      <div className='text'>
        <h1>اسعارنا</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar </p>
      </div>
      <div style={ { maxWidth: "1232px", margin: "auto" } }>
        <TableContainer component={ Paper } sx={ { maxWidth: "1232px", margin: "auto" } }  >
          <Table sx={ { minWidth: 650 } } aria-label="simple table">
            <TableHead sx={ { backgroundColor: "#BBA664", borderRadius: "12px 12px 0px 0px" } }>
              <TableRow >
                <TableCell
                  sx={ { color: "#fff", fontSize: "16px", fontWeight: 500, width: "70px" } } align='right'>م</TableCell>
                <TableCell sx={ { color: "#fff", fontSize: "16px", fontWeight: 500, lineHeight: "16px", padding: "10px" } } align="center">الرحله</TableCell>
                <TableCell sx={ { color: "#fff", fontSize: "16px", fontWeight: 500, lineHeight: "16px", padding: "10px" } } align="center">سيارة سيدانسوناتا/كامرى</TableCell>
                <TableCell sx={ { color: "#fff", fontSize: "16px", fontWeight: 500, lineHeight: "16px", padding: "10px" } } align="center">سيارات عائلية(فئة اتش وان)</TableCell>
                <TableCell sx={ { color: "#fff", fontSize: "16px", fontWeight: 500, lineHeight: "16px", padding: "10px" } } align="center">باصات</TableCell>
                <TableCell sx={ { color: "#fff", fontSize: "16px", fontWeight: 500, lineHeight: "16px", padding: "10px" } } align="center">سيارات VIPلكزس ES</TableCell>
                <TableCell sx={ { color: "#fff", fontSize: "16px", fontWeight: 500, lineHeight: "16px", padding: "10px" } } align="center">السيارات الفارهة(مرسيدس. بى ام)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { rows.map((row) => (
                <TableRow
                  key={ row.name }
                  sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                >
                  <TableCell align='right' component="th" scope="row" sx={ { width: "70px" } } >{ row.name }</TableCell>
                  <TableCell sx={ { lineHeight: "16px", fontSize: "16px", fontWeight: 500, width: "240px", padding: "10px" } } align="center">{ row.calories }</TableCell>
                  <TableCell sx={ { lineHeight: "16px", fontSize: "16px", fontWeight: 500, width: "153px", padding: "10px" } } align="center">{ row.fat }</TableCell>
                  <TableCell sx={ { lineHeight: "16px", fontSize: "16px", fontWeight: 500, width: "153px", padding: "10px" } } align="center">{ row.carbs }</TableCell>
                  <TableCell sx={ { lineHeight: "16px", fontSize: "16px", fontWeight: 500, width: "153px", padding: "10px" } } align="center">{ row.protein }</TableCell>
                  <TableCell sx={ { lineHeight: "16px", fontSize: "16px", fontWeight: 500, width: "153px", padding: "10px" } } align="center">{ row.plus1 }</TableCell>
                  <TableCell sx={ { lineHeight: "16px", fontSize: "16px", fontWeight: 500, width: "153px", padding: "10px" } } align="center">{ row.plus2 }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>
        <p className='text_footer'>
          الاسعار قابلة للتغيير فى موسم الحج و العمرة
        </p>
      </div>
    </div>
  );
};

export default Prices;