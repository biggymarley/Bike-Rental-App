import styled from "@emotion/styled";
import { Delete, Edit, PedalBike } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersScreenContext } from "../../utils/contexts";
const HeaderCell = styled(TableCell)({
  fontWeight: 900,
  fontFamily: "'Open Sans', sans-serif",
});
const labels = ["Name", "Email", "Role", "Actions"];

export default function UsersTable({ users }) {
  const navigate = useNavigate();
  const { DeleteUser } = useContext(UsersScreenContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {labels.map((label, index) => (
              <HeaderCell key={index} align="left">
                {label}
              </HeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell>
                <IconButton
                  color="secondary"
                  onClick={() => navigate(`userbikes/${row.uid}`)}
                >
                  <PedalBike />
                </IconButton>
                <IconButton color="info" onClick={() => navigate(row.uid)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => DeleteUser(row.uid)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
