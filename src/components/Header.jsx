import React, { useState,  } from 'react';
//useState --> estado en componentes creados como funciones
//useEffect --> nos permite manejar efectos dentro del comp, llamamos a una api traemos la info y la presentamos en nuestro componente


const Header = () => {
    //constanste que va a destructurar 2 elemnentos // 1 constante, 2 es una funcion que va a cambiar el estado // asi tenemos la logica de un HOOK de un useState
    const [darkMode, setDarkMode] = useState(false);
    
    // necesitamos que el boton ejecute una funcion para cambiar de estado
    const handleClick = () => {
        setDarkMode(!darkMode);
    } 

    return (
        <div className="Header">
            <h1>ReactHooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    );
}

export default Header;