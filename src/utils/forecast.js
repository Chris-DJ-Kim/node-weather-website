const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=566c98698ec56e4d9d0e0551f651485f&query=${latitude},${longitude}&units=f`;
  request({ url: url, json: true }, (error, response) => {
    const { current, error: responseError } = response.body;
    const { weather_descriptions, temperature, precip } = current;
    if (error) {
      callback(error);
      return;
    }
    if (responseError) {
      callback(responseError);
      return;
    }
    callback(
      undefined,
      `Currently ${
        weather_descriptions[0]
      }. It is ${temperature} degrees outside with a ${
        precip * 100
      }% chance of precipitation.`
    );
  });
};

module.exports = forecast;
