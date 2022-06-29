import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Getdata.css";
const Readdata = () => {
  const [data, setdata] = useState([]);
  const fetchurl =
    "https://crudcrud.com/api/c201e60b735e47be93ba3cfff334b240/details";

  const getData = () => fetch(fetchurl).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setdata(data));
  }, []);

  const onDelete = (id) => {
 
    axios
      .delete(
        `https://crudcrud.com/api/c201e60b735e47be93ba3cfff334b240/details/${id}`
      )
      .then(() => {
        getData();
        window.location.reload(false);
       alert(" do you want to delete a record")
      });
      
  };
  return (
   <div className="container">
    <div className="py-4">
      <table className="table border shadow">
      <thead className="thead-dark">
        <tr >
        <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee Email</th>
          <th>Employee Password</th>
          <th>operations</th>
        </tr>
      </thead>
      <tbody>
      {data?.map((list, i) => (
          <tr key={i}>
            
            <td>{list.employeID}</td>
            <td>{list.employeName}</td>
            <td>{list.email}</td>
            <td>{list.password}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(list._id)}
              >
                {" "}
                Delete Record
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
   </div>
    );
};
export default Readdata;
