var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
port = process.env.PORT || 9016,
plugin = require("centaurs-test-plugin"),
weather = require('./controllers/weather_controller.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('port', port);

app.use(plugin.timer.start);

app.get('/', weather.index);
app.post('/api/weather/openweathermap/current', weather.open_weather_map_current);
app.post('/api/weather/seniverse/current', weather.seniverse_current);

app.use(plugin.timer.stop);

plugin.catchErr();

app.listen(app.get('port'), function () {
    console.log('Server started at ' + port);
    plugin.showConfig();
    plugin.sysCheck(60);
});