import React, {Fragment, useState, useEffect} from 'react';
import {BotonApp, ContenedorApp} from './styled-components/StyledApp';
import Frase from './components/Frase';


function App() {
    //state de frases
    const [frase, obtenerFrase] = useState({});
    //consultar api
    const consultarAPI = async () => {
        const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const frase = await api.json();
        obtenerFrase(frase[0]);
    }

    //cargar la frase
    useEffect(()=>{
        consultarAPI();
    },[]);
    return (
        <Fragment>
            <ContenedorApp>
                <Frase
                    frase={frase}
                />
                <BotonApp onClick={consultarAPI}>Obtener Frase</BotonApp>
            </ContenedorApp>
        </Fragment>
    );
}

export default App;
