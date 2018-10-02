import React from 'react';

//const Location = (props) => {
const Location = ({city}) => {
    /*onsole.log(props);
    debugger;*/
    //<div><h1>props</h1></div>
    //Manejo de parametros
    /*
    const city = props.city;
    return (<div><h1>{city}</h1></div>);
    */

    //usando destructuring
    //Nueva técnica de ES6. cuando tenemos una propiedad con un nombre que luego 
    //vamos a asignar a una varible o constante con el mismo nombre que la propiedad
    //la podemos asignar de forma directa...por ejemplo
    //const {city} = props;

    //también puedo omitir la linea de arriba y cambiar la firma de la operación
    // y donde dice props reemplazar por {city}

    return (<div><h1>{city}</h1></div>);
};

export default Location;
