import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "name", headerName: "Employee Name", width: 250 },
  { field: "phone", headerName: "Phone Number", width: 200 },
  { field: "email", headerName: "E-Mail", width: 300 },
  { field: "dob", headerName: "D.O.B.", width: 200 },
];
export default function Table({ rows }) {
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={12} checkboxSelection />
    </div>
  );
}
