import axios from "axios";

function get(cityName) {
  let apiURL = `http://api.weatherapi.com/v1/current.json?key=3409f8c3c25a40a586e80837221706&q=${cityName}`;
  return axios.get(apiURL);
}

export default {
  get,
};
