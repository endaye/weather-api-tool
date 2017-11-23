var express = require('express');
var app = express();

// body parser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var port = 3402;
app.set('port', port);

var weather = require('./controllers/weather_controller.js')

app.get('/', weather.index);

app.post('/api/weather/openweathermap/current', weather.open_weather_map_current);
app.post('/api/weather/seniverse/current', weather.seniverse_current);

app.listen(app.get('port'), function () {
    console.log('Server started at ' + port);
});