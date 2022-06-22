import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import http from "./httpServices";
import ShowWeather from "./showWeather";

import {
  Container,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Button,
} from "@mui/material";

const initialValues = {
  countryName: "",
  stateName: "",
  cityName: "",
};

export default function FindWeather() {
  const [userSelectedValue, setUserSelectedValue] = useState(initialValues);
  const [countryCode, setCountryCode] = useState();
  const [stateCode, setStateCode] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [tempDtl, setTempDt] = useState({});

  function handleChange(e) {
    setUserSelectedValue({
      ...userSelectedValue,
      [e.target.name]: e.target.value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    fetchWeather();
  }

  async function fetchWeather() {
    if (!userSelectedValue.cityName) {
      alert("Please Select the City First..");
    } else {
      let response = await http.get(userSelectedValue.cityName);
      setTempDt(response.data.current);
      setCurrentTemp(response.data.current.temp_c);
    }
  }

  return (
    <Container>
      <Paper
        elevation={15}
        sx={{ backgroundColor: "#E5D68A", borderRadius: "15px" }}
      >
        {/*........................................... Main Heading...........................................*/}
        <h1
          style={{
            textAlign: "center",
            color: "#E21717 ",
            textShadow: "2px 2px #50DBB4",
            fontFamily: "'Lobster', cursive",
            fontSize: "40px",
          }}
        >
          Track Weather of your location
        </h1>

        <Grid
          container
          spacing={2}
          direction="row"
          mt={5}
          sx={{ textAlign: "center" }}
        >
          {/*........................................... Country DropDown...........................................*/}
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Box>
              <FormControl fullWidth>
                <InputLabel>Select Country</InputLabel>
                <Select
                  name="countryName"
                  value={userSelectedValue.countryName}
                  label="Select Country"
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                >
                  {Country.getAllCountries().map((elem) => {
                    return (
                      <MenuItem
                        value={elem.name}
                        onClick={() => setCountryCode(elem.isoCode)}
                      >
                        {elem.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/*........................................... State DropDown...........................................*/}
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel>Select State</InputLabel>
              <Select
                name="stateName"
                value={userSelectedValue.stateName}
                label="State"
                onChange={handleChange}
                variant="outlined"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              >
                {State.getStatesOfCountry(countryCode).map((elem) => {
                  return (
                    <MenuItem
                      value={elem.name}
                      onClick={() => setStateCode(elem.isoCode)}
                    >
                      {elem.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          {/*........................................... City DropDown...........................................*/}
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel>Select City</InputLabel>
              <Select
                name="cityName"
                value={userSelectedValue.cityName}
                label="City"
                onChange={handleChange}
                variant="outlined"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              >
                {City.getCitiesOfState(countryCode, stateCode).map((elem) => {
                  return <MenuItem value={elem.name}>{elem.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/*-------------------------------------------------Submit Button--------------------------------------------------- */}
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Button variant="contained" onClick={(e) => submitForm(e)}>
            Submit
          </Button>
        </Box>
      </Paper>
      {/*------------------------------------------- Display Weather Card------------------------------------------ */}
      <Box sx={{ mt: 5 }}>
        <ShowWeather
          temperature={currentTemp}
          cityName={userSelectedValue.cityName}
          tempDtl={tempDtl}
        />
      </Box>
    </Container>
  );
}
