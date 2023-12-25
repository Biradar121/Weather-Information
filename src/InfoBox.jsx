import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({ info }) {

    let COLD_URL = "https://media.istockphoto.com/id/1448475077/photo/sunlight-beaming-through-snow-covered-branches-of-coniferous-pine-and-fir-evergreen-tress-at.jpg?s=2048x2048&w=is&k=20&c=Wz-iDmjAuJrVM-WKushYjL-jdFPc-sN5nFGZOBfM5wE=";
    let HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg=";
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";

    return (
        <div className="InfoBox">
            <div className='Weather_card'>
                <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
                    <CardMedia
                        sx={{ height: 170 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="haze_Weather_img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component={"span"}>
                            <b>{info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? < WbSunnyIcon/> : <AcUnitIcon/> }</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div >Temperature = <i>{info.temp}&deg;C</i></div>
                            <div>Humidity = <i>{info.humidity}</i></div>
                            <div>Max Temp = <i>{info.tempMax}&deg;C</i></div>
                            <div>Min Temp = <i>{info.tempMin}&deg;C</i></div>
                            <div>The weather can be described as <i>{info.weather}</i> feels like <i>{info.feelsLike}&deg;C</i> </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}