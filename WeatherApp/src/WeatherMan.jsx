import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from 'react';

export default function WeatherMan()
{

    let[weatherInfo ,setWeatherInfo]=useState({
     
        city:"XYZ",
        feels_like:0,
        humidity:0,
        temp:0,  //taken from search box object created by openweatherapi
        temp_max:0,
        temp_min:0,
        weather: "",
    })

        let updateInfo=(newinfo) =>
        {
            setWeatherInfo(newinfo);
        }
    return(<div >
        <h1>
       WEATHERMAN
        </h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>);
}