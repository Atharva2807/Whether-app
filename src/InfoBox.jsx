import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60";

    // 🛑 Show nothing if info is null
    if (!info) {
        return (
            <div className="infoBox">
                <h2 style={{ textAlign: "center" }}>Search for a city to see the weather info</h2>
            </div>
        );
    }

    return (
        <div className="infoBox" style={{ marginTop: "20px" }}>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature: {info.temp}°C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Min Temp: {info.tempMin}°C</p>
                            <p>Max Temp: {info.tempMax}°C</p>
                            <p>
                                The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C.
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
