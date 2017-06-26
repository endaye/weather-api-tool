# weather-api-tool
a Centaurstech weather api query tool

## How to Run

1. download the code or `git clone` then extract
2. run `npm install` from command line window
3. run `node app.js`
4. finnaly, use [Postman](https://www.getpostman.com/) to send some requests to `http://localhost:3402/api/weather/....`

## API Reference

1. **OpenWeatherMap**: [`https://openweathermap.org`](https://openweathermap.org/api)
2. **心知天气**: [`https://www.seniverse.com`](https://www.seniverse.com/doc)

## Data Format Example

### Info

+ **Port:** 3042

+ **Method:** POST, JSON

+ **API URL:** 
  1. **OpenWeatherMap**: `/api/weather/openweathermap/current`
  2. **心知天气**: `/api/weather/seniverse/current`

### Request
```json
{
    "city":"shanghai"
}
```

### Respond
```json
{
    "city": "Shanghai",
    "country": "CN",
    "temp": 24,
    "humidity": 94,
    "wind": {
        "speed": 2,
        "deg": 140
    },
    "visibility": 2500
}
```

