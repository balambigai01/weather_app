import React,{useState} from 'react';
import './App.css';
import Input from './components/input';
import axios from "axios";
import Result from "./components/Result";
function App() {
const [input, setInput] = useState("");
const [temp, setTemp] = useState("");
const[description, setDescription]=useState("");
const[icon, setIcon]=useState("");
const findweather = async () => {
   const apikey = "d3f81cf2d3d4cb708411e6df61eac0cf";
   const unit = "metric";
   const url = "https://api.openweathermap.org/data/2.5/weather?q=" +
   input +
   "&appid=" +
   apikey +
   "&units=" +
   unit;
   const response = await axios.get(url);
   const temp = await response.data.main.temp;
   const weatherDescription = await response.data.weather[0].description;
   const icon = await response.data.weather[0].icon;
   const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
   setTemp(temp);
   setDescription(weatherDescription);
   setIcon(imageURL);
   setInput("");
  }; 
  return (
    <div className="app">
      {temp === "" ? (
      <Input input={input} setInput={setInput} findweather={findweather} />) :
      (<Result temp={temp} desc={description} icon={icon} setTemp={setTemp} />
      )}
    </div>
  );
}

export default App;
