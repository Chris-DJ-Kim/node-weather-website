const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoianVuaW9yZGo0MjgiLCJhIjoiY2tmc3oxbDllMDRodjJ0cDk4aWRieTk3aiJ9.RklpsMrgGkw6Pt2rNWE9Ww`;
  request({ url: url, json: true }, (error, response) => {
    const { features } = response.body;
    if (error) {
      callback("Unable to connect to location services");
      return;
    }
    if (features.length === 0) {
      callback("Unable to find location");
      return;
    }
    callback(undefined, {
      latitude: features[0].center[1],
      longitude: features[0].center[0],
      location: features[0].place_name,
    });
  });
};

module.exports = geocode;
