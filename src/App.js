import React, {useState, useEffect} from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import Table from "./components/Table.js";
import API from "./utils/API.js";

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    API.getEmployeeData().then((res) => {
      const data = res.data.results;
      console.log(data);
      const parsedEmployeeData = data.map((row, i) => {
        return {
          id: i,
          name: `${row.name.first} ${row.name.last}`,
          phone: row.phone,
          email: row.email,
          dob: new Date(row.dob.date).toLocaleDateString(),
        };
      });

      setEmployeeData(parsedEmployeeData);
    });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Table rows={employeeData} />
    </div>
  );
}

export default App;
