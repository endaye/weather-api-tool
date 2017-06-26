/**
 * Created by En on 6/23/17.
 */

// parser_open_weather_map.js

// api.openweathermap.org/data/2.5/weather?id=2172797&APPID=9a05b9676fdbc2f3e085dd6e68159ef0 

var appid = '9a05b9676fdbc2f3e085dd6e68159ef0',
    url_current = "api.openweathermap.org/data/2.5/weather";

exports.package_request_current = function (city_id) {
    // Configure the request
    var options = {
        url: 'http://' + url_current + '?id=' + city_id + '&APPID=' + appid,
        method: 'GET',
    }

    return options
}

exports.parser_current = function (body) {
    var raw_data = JSON.parse(body);
    var weather = {}
    weather.city = raw_data.name;
    weather.country = raw_data.sys.country;
    weather.main = raw_data.weather.main;
    weather.desc = raw_data.weather.description;
    weather.temp = raw_data.main.temp - 273.15;
    weather.humidity = raw_data.main.humidity;
    weather.wind = raw_data.wind;
    weather.visibility = raw_data.visibility;
    return weather
}

