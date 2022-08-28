import React from 'react';
import "./Result.css";
import { Button } from "@material-ui/core";

const Result = ({temp,icon,desc,setTemp}) => {
  return (
    <div className="result">
        <div className="result_box">
            <h1>temp: {temp} °C</h1>
            <p>{desc}</p>
            
            <img src= {icon} alt="logo" />
            <div className="alligned">
            <Button variant="contained" color="default"
             onClick= {() => {
              setTemp("");
              }} 
              >
                Back
            </Button>
            </div>
        </div>
      
    </div>
  );
};

export default Result

