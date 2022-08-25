import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  Designation,
  Email,
  Direct_Number,
  Phone_Number,
  Extention,
  Fax
) {
  return {
    name,
    Designation,
    Email,
    Direct_Number,
    Phone_Number,
    Extention,
    Fax,
  };
}

const director__general__rows = [
  createData(
    "Shri. Amit Nirmal",
    "Director General",
    "dg.vvgnli@gov.in",
    "0120-2411470",
    "120-2411533 535",
    "232",
    "0120-2411474"
  ),
];

const senior__fellows__rows = [
  createData(
    "Dr. Helen R Sekar",
    "Director General",
    "dg.vvgnli@gov.in",
    "0120-2411470",
    "120-2411533 535",
    "232",
    "0120-2411474"
  ),
  createData(
    "Shri. Amit Nirmal",
    "Director General",
    "dg.vvgnli@gov.in",
    "0120-2411470",
    "120-2411533 535",
    "232",
    "0120-2411474"
  ),
];

const fellows__rows = [
  createData(
    "Dr. Helen R Sekar",
    "Director General",
    "dg.vvgnli@gov.in",
    "0120-2411470",
    "120-2411533 535",
    "232",
    "0120-2411474"
  ),
  createData(
    "Shri. Amit Nirmal",
    "Director General",
    "dg.vvgnli@gov.in",
    "0120-2411470",
    "120-2411533 535",
    "232",
    "0120-2411474"
  ),
  createData(
    "Shri. Amit Nirmal",
    "Director General",
    "dg.vvgnli@gov.in",
    "0120-2411470",
    "120-2411533 535",
    "232",
    "0120-2411474"
  ),
  createData(
    "Shri. Amit Nirmal",
    "Director General",
    "dg.vvgnli@gov.in",
    "0120-2411470",
    "120-2411533 535",
    "232",
    "0120-2411474"
  ),
];

const WhosWho = () => {
  return (
    <>
      <div className="whos__who">
        <div className="whos__who__container">
          <div className="whos__who__director__general__table__container">
            <div className="whos__who__director__general__table__heading__container">
              <h1>Director General</h1>
            </div>
            <div className="whos__who__director__general__table">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Title</StyledTableCell>
                      <StyledTableCell align="right">
                        Designation
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Email Address
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Direct Number
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Phone Number
                      </StyledTableCell>
                      <StyledTableCell align="right">Extention</StyledTableCell>
                      <StyledTableCell align="right">Fax</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {director__general__rows.map((director__general__rows) => (
                      <StyledTableRow key={director__general__rows.name}>
                        <StyledTableCell component="th" scope="row">
                          {director__general__rows.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {director__general__rows.Designation}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {director__general__rows.Email}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {director__general__rows.Direct_Number}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {director__general__rows.Phone_Number}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {director__general__rows.Extention}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {director__general__rows.Fax}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>



          <div className="whos__who__senior__fellows__table__container">
            <div className="whos__who__senior__fellows__table__heading__container">
              <h1>Senior Fellows</h1>
            </div>
            <div className="whos__who__senior__fellows__table">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Title</StyledTableCell>
                      <StyledTableCell align="right">
                        Designation
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Email Address
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Direct Number
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Phone Number
                      </StyledTableCell>
                      <StyledTableCell align="right">Extention</StyledTableCell>
                      <StyledTableCell align="right">Fax</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {senior__fellows__rows.map((senior__fellows__rows) => (
                      <StyledTableRow key={senior__fellows__rows.name}>
                        <StyledTableCell component="th" scope="row">
                          {senior__fellows__rows.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {senior__fellows__rows.Designation}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {senior__fellows__rows.Email}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {senior__fellows__rows.Direct_Number}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {senior__fellows__rows.Phone_Number}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {senior__fellows__rows.Extention}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {senior__fellows__rows.Fax}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>



          <div className="whos__who__fellows__table__container">
            <div className="whos__who__fellows__table__heading__container">
              <h1>Fellows</h1>
            </div>
            <div className="whos__who__fellows__table">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Title</StyledTableCell>
                      <StyledTableCell align="right">
                        Designation
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Email Address
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Direct Number
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Phone Number
                      </StyledTableCell>
                      <StyledTableCell align="right">Extention</StyledTableCell>
                      <StyledTableCell align="right">Fax</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fellows__rows.map((fellows__rows) => (
                      <StyledTableRow key={fellows__rows.name}>
                        <StyledTableCell component="th" scope="row">
                          {fellows__rows.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {fellows__rows.Designation}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {fellows__rows.Email}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {fellows__rows.Direct_Number}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {fellows__rows.Phone_Number}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {fellows__rows.Extention}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {fellows__rows.Fax}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhosWho;
