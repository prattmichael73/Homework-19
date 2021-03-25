import axios from "axios";
const  getEmployeeData = {
  getEmployeeData: function () {
    return axios.get("https://randomuser.me/api/?results=100");
  },
};

export default getEmployeeData;
