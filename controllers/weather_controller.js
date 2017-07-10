/**
 * Created by En on 6/23/17.
 */

//weather-controller.js
var express = require('express');
var request = require('request');
var app = express();

// body parser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

exports.index = function (req, res) {
    res.render("index.pug", { layout: false });
};

// https://openweathermap.org/current
exports.open_weather_map_current = function (req, res) {
    var user_city = req.body.city.toLowerCase().replace(/\s+/g, '');
    var city_list, city_ids, own, i;

    owm = require('./parser_open_weather_map.js')
    city_list = require('../models/owm_city_list.json');
    city_ids = [];

    for (i = 0; i < city_list.length; ++i) {
        var city = city_list[i];
        if (city.name.toLowerCase().replace(/\s+/g, '').indexOf(user_city) !== -1) {
            city_ids.push(city.id);
        }
    }

    if (city_ids.length == 0) {
        res.send("Sorry, don't find the place called " + city + '.')
        return
    }

    options = owm.package_request_current(city_ids[0]);

    // Start the request
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var weather = owm.parser_current(body);
            res.send(weather);
        } else if (error) {
            console.log(error);
        }
    })
};

// https://openweathermap.org/current
exports.seniverse_current = function (req, res) {
    var user_city = req.body.city.toLowerCase().replace(/\s+/g, '');
    var seniverse, i;

    seniverse = require('./parser_seniverse.js')

    options = seniverse.package_request_current(user_city);

    // Start the request
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var weather = seniverse.parser_current(body);
            res.send(weather);
        } else if (error) {
            console.log(error);
             var weather={}
             // unknown error
             res.status(520) 
             res.send(weather)
        }
        else if (response.statusCode == 404){
            var weather=seniverse.parser_current(body)
             res.status(404)
             res.send(weather)
        }
        else if(response.statusCode == 403){
            var weather=seniverse.parser_current(body)
            res.status(403)
            res.send(weather)
        }
       
    })
};











