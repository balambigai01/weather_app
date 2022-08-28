import React from "react";
import Input from '@material-ui/core/Input';
import { Button } from "@material-ui/core";
import weather from "../images/weather.png";
import "./input.css";

const inputer = ({input,setInput,findweather}) => {
   const handleChange = (event) => {
    setInput(event.target.value);
   };
   
   const handleClick = (event)=>{
      event.preventDefault();
      findweather();    
   }
   
    return(
        <div className="inputBox">
            <div className="inputBox__field">
                  <h1>Google weather App</h1>
                  
                  <p>powered by</p>
                  <br />
                  <form>
                  <img src={weather} alt="img" width={50} height={50}/> <br />
                  <Input placeholder="Enter the city" onChange={handleChange} value={input} />  <br/>
                  <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                    search</Button>
                    </form>
            </div> 
           
        </div>
    );
};
export default inputer;