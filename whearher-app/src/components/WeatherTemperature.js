import React from 'react';
import WeatherIcons from 'react-weathericons';
/*
const icons = {
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    windy: "windy"
};*/
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers'


//entre corchetes para especificar que es el valor de la constante lo que se relaciona con el icono
const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcons = weatherState => {
    const icon = icons[weatherState];

    if(icon)
        return <WeatherIcons name={icon} size="2X"/>;
    else
        return <WeatherIcons name={"day-rain"} size="2X"/>;

}


const WeatherTeperature = ({temperature,weatherState}) => (
<div>
    {
        //Llaves porque va código Javascript
        getWeatherIcons(weatherState)
    }
    
    <span>{`${temperature} C°`} </span>
</div>
);


export default WeatherTeperature; 

