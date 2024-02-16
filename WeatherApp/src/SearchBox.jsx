
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import './SearchBox.css'
import { Update } from '@mui/icons-material';
import Alert from '@mui/material/Alert';

export default function SearchBox({ updateInfo })
{
   let[city,setCity]= useState("");
   let[error,setError]=useState(false);
   let e=0;
   //setting error conditions
   //its better to declare state vriable at the top so that all functions gets its access
    //in label part we can chnage the name of box for example here 
   //label is outlined so change it to city name
   //writing required works like g form required
   //type need to be submit for the implementation of default functions of form
   //then only it will show its a required field

const API_URL="https://api.openweathermap.org/data/2.5/weather" ; 
 const API_KEY="0d3642c823a1c364d30986afaad7a268";

//whenerver we call an API its generally asyncronous as it may take time in fetching data



 
let getWeatherInfo =async() =>
 {
   try
   {
  let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
 
  

 //by default temp is in fahrentite so use metric so it comes to normal temperature
 let jsonResponse =await response.json();
 console.log(jsonResponse);
//extracting data from API
let result ={
   city:city,
   temp :jsonResponse.main.temp,
   temp_min :jsonResponse.main.temp_min,
   temp_max :jsonResponse.main.temp_max,
   humidity :jsonResponse.main.humidity,
   feels_like :jsonResponse.main.feels_like,
   weather :jsonResponse.weather[0].description,
   


};
console.log(result);
return result;
}

 catch(err)
 {
   throw err;
 }


 
}
   let handleChange =(event)=>//here the event object is event it can be anything like evt eve
   {                          //tracks changes in the event
    setCity(event.target.value);
   }
   let handleSearch= async(event)=>
   {    
      try
      {

                          //sets the function required according to event
     event.preventDefault();
    console.log(city);
    getWeatherInfo();      
    setCity("");    
    //using the below line we are accessing info abt weather
    //and updating the info
    let newinfo= await getWeatherInfo();
    updateInfo(newinfo);
    
    //its present in weatherman component
   }

      catch(err)
      {
         
       setError(true);
       
      }
   }
   
    //  console.log(<p style={{color:"red"}}>  No Such Place exsists !!!!.</p>);
    //  setError(false);
      
    
   
  

return(<div className='Searchbox'>
    <h3>Search the city weather</h3>
   <form onSubmit={handleSearch}>
    
    <TextField id="city" label="Cityname"
     variant="outlined"  required 
     value={city}
     onChange={handleChange}
     color="warning" />
      
  <br /><br />
    <Button variant="contained" type="submit" style={{color:"white"}}>Search</Button>
    {error && <p style={{color:"red"}}>  No Such Place exsists !!!!.</p>}

  
</form>
   </div>);
   
}
