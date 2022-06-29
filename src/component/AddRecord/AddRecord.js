import React from "react";
import { useState } from "react";
import axios from "axios";
import {} from "react-router-dom";
import "./AddRecord.css";
import "bootstrap/dist/css/bootstrap.min.css";
const AddUser = () => {
    const [employeName, setEmployeName] = useState("");
    const [employeID, setEmployeID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    async function onFormSubmit(e) {
      window.location.reload(false);
      e.preventDefault();
      let obj1 = new Object();
      obj1.employeID = employeID;
      obj1.employeName = employeName;
      obj1.email = email;
      obj1.password = password;
      console.log(obj1);


      try {
        if(employeID==null||employeID===""){
          alert("enter your employeeID")
        }
      
        else if(employeName==null||employeName===""){
          alert("enter your employee name")
        }
        else 
        if(email==null||email===""){
          alert("enter your employee email")
        }
        else
        if(password==null||password===""){
          alert("enter your employee password")
        }
        else{
          alert("Do you want to add new record")
        await axios.post(
          "https://crudcrud.com/api/c201e60b735e47be93ba3cfff334b240/details",
          obj1
        );
      } 
    }catch (error) {
        console.log(error.msg);
      }
   
    }
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h1 className="text-center mb-4">Employee Details Form</h1>
        <form>
        <div className="form-group">
        <input
          type="number"
          placeholder="enter your employee id"
          className="empid form-control "
          id="eid"
          required
          onChange={(e) => setEmployeID(e.target.value)}
        >
        </input>
        </div><br />
        <div className="form-group">
        <input
          type="text"
          placeholder="enter your employee name"
          className="empname form-control"
          id="ename"
          required
          onChange={(e) => setEmployeName(e.target.value)}
        ></input>
        </div><br />
        <div className="form-group">
        <input
        type="email"
        placeholder="enter your employee email"
        className="empemail form-control "
        id="eemail"
        required
        onChange={(e) => setEmail(e.target.value)}
      ></input>
        </div><br />
        <div className="form-group">
        <input
          type="password"
          placeholder="enter your password"
          className="emppsw form-control "
          id="epsw"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        </div><br />
        <button
        type="button"
        className="btn btn-primary mb-2 btn-block"
        id="btn1"
        onClick={onFormSubmit}
      >
        Add User
      </button>
        </form>
        </div>
        
      </div>
    
        );
    };
    export default AddUser;