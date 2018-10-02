import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers'



//acá uso las constantes declaradas pasandolas al control weatherState
const WeatherData = () => (
 <div>
     
    <WeatherTemperature temperature={20} weatherState ={SUN}></WeatherTemperature>
    <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
 </div>
);

export default WeatherData;