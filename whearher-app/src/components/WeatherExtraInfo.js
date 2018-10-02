import React from 'react';


var WeatherExtraInfo = ( { humidity , wind }) => (
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtraInfo;

