/**
 * Created by En on 6/26/17.
 */

// parser_seniverse.js

// https://api.seniverse.com/v3/weather/now.json?key=8nlhkrnwxqzosoqu&location=beijing&language=zh-Hans&unit=c 

var key = '8nlhkrnwxqzosoqu',
    url_current = 'api.seniverse.com/v3/weather/now.json',
    language = 'zh-Hans',
    unit = 'c'

exports.package_request_current = function (city) {
    // Configure the request
    var options = {
        url: 'https://' + url_current + '?key=' + key + '&location=' + city + '&language=' + language + '&unit=' + unit,
        method: 'GET',
    }

    return options
}

exports.parser_current = function (body) {
    var raw_data = JSON.parse(body);
    console.log(raw_data.results);
    var weather = {}
    weather.city = raw_data.results[0].location.name;
    weather.country = raw_data.results[0].location.country;
    weather.main = raw_data.results[0].now.text;
    weather.desc = weather.main;
    weather.temp = raw_data.results[0].now.temperature;
    weather.humidity = '';
    weather.wind = '';
    weather.visibility = '';
    return weather
}