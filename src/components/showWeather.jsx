import images from "../assets/images/logo.png";
import img2 from "../assets/images/img2.jpg";
import rainyImg from "../assets/images/rainy.jpg";

import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

export default function ShowWeather(props) {
  return (
    <>
      {props.temperature ? (
        <Grid
          container
          spacing={2}
          direction="row"
          mt={5}
          // sx={{ textAlign: "center" }}
        >
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "20px",
                backgroundColor: "#1C8D73",
              }}
            >
              <CardMedia
                component="img"
                height="135"
                image={images}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Temperature in Celsius
                </Typography>
                <Typography variant="body2">
                  <h3>
                    The current Temperature of {props.cityName} is{" "}
                    {props.tempDtl.temp_c} degree celsius. and its feels like{" "}
                    {props.tempDtl.feelslike_c} degree celsius.{" "}
                  </h3>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "20px",
                backgroundColor: "#E5D68A",
              }}
            >
              <CardMedia
                component="img"
                height="135"
                image={img2}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Weather Condition
                </Typography>
                <Typography variant="body2">
                  <h3>The Weather is {props.tempDtl.condition.text}</h3>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "20px",
                backgroundColor: "#FF6263",
              }}
            >
              <CardMedia
                component="img"
                height="135"
                image={rainyImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Raining Chance
                </Typography>
                <Typography variant="body2">
                  <h3>Raining chances is Zero your area.</h3>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
}
