import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export default function InfoBox({info})
{
    const INIT_URL="https://media.istockphoto.com/id/1176320050/photo/weather-forecast-on-a-digital-display-7-day-dashboard-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=H5jbreqseczNxXieF9e0R8O5FHeY0ylKgEX_RKFenGo=";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
    const HOT_URL="https://media.istockphoto.com/id/485615032/photo/golden-larch-trees.webp?b=1&s=170667a&w=0&k=20&c=X4veZF6Whczgn9tCiWXETBoeumqSN3zWZlVyUee-c-c=";
   const COLD_URL="https://media.istockphoto.com/id/453067967/photo/panorama-of-the-winter-morning.webp?b=1&s=170667a&w=0&k=20&c=2xnIyX_0108o9qUq6bS3Iw9Tq2AKSB_bSfdPipQaiDc=";
    // copy image address
 /*   let info={
       city:"Kanpur",
        feels_like:14.03,
        humidity:54,
        temp:15.04,  //taken from search box object created by openweatherapi
        temp_max:15.06,
        temp_min:15.05,
        weather: "haze",
      

   
    };
    */
//if we want to add degree celicius in html we use &ded=g symbol
 //   validateDOMNesting(...): <div> cannot appear as a descendant of <p>.
//this error is removed by using span component
   let imagedecider=()=>
   {
    if(info.city == "XYZ")
    return INIT_URL;
    else
  {
    if(info.humidity > 80)
    {
      return RAIN_URL;
    }
      else
      {
       if(info.temp > 15)
       return HOT_URL;
      else
      return COLD_URL;
    }
  }
}
let icondecider=()=>
{
 if(info.city == "XYZ")
 return <AutoAwesomeIcon/>;
 else
{
 if(info.humidity > 80)
 {
   return <ThunderstormIcon/>;
 }
   else
   {
    if(info.temp > 15)
    return <WbSunnyIcon/>;
   else
   return <AcUnitIcon/>;
 }
}
}

 
return(
        <div className="InfoBox">
          
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
       // image={info.humidity > 80 ?RAIN_URL:(info.temp > 15 ?
       //   HOT_URL:COLD_URL)}
        image ={ imagedecider()}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;&nbsp;
            {icondecider()}
          
        
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Tempeature={info.temp}&deg;C</p>
         <p>Maximum Temperature={info.temp_max}&deg;C</p>
         <p>Minimum Temperature={info.temp_min}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p> Weather is decribed as<i> {info.weather}</i> and feels like {info.feels_like}&deg;C</p>
         
        </Typography>
      </CardContent>
      
    </Card>


        </div>
    );
}