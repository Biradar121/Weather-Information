import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
export default function SearchBox({updateInfo}) {
    let [city,setCity]= useState("");
    let [error,setError]=useState(false);
    let API_URL="http://api.openweathermap.org/data/2.5/weather"
    let API_KEY="6c5bdd1073e77f61d014bff0b6a8e133";

  

    
    let getWeatherInfo=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
             city:city,
             temp:jsonResponse.main.temp,
             tempMin:jsonResponse.main.temp_min,
             tempMax:jsonResponse.main.temp_max,
             humidity:jsonResponse.main.humidity,
             feelsLike:jsonResponse.main.feels_like,
             weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }
        catch(error){
            throw error;
        }
    };

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
       }
       catch(error){
        setError(true)
       }
    }

    return (
        <div className="SearchBox">
            <form action="">
                <TextField id="city" label="City Name" variant="outlined" required  onChange={handleChange} />
                <br /> <br />
                <Button variant="contained" type='sumbit' onClick={handleSubmit}>Search</Button>
            </form>
            {error && <p style={{color:"red"}} >No Such Place Exists!!</p> }
        </div>
    )
}