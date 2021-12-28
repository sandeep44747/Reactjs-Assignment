import React from "react";
import data from "./App";

function Mydata(){
    return(<div className="customer-info">
        <div id="appoint-info">
        <label className="appoint">Appointment:</label>
        <p>{data.Appointment}</p>
        </div>
        <div id="mail-info">
        <label className="email">Email:</label>
        <p>{data.Email}</p>
        </div>
        <div id="phone-info">
        <label className="phone">Phone:</label>
        <p>{data.Phone}</p>
        </div>
    </div>)
}
export default Mydata;