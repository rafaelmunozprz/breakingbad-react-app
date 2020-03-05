import React, { Fragment } from 'react';
import { ContenedorFrase } from '../styled-components/StyledFrase';

const Frase = ({ frase }) => {
    const { author, quote } = frase;
    return (
        <Fragment>
            <ContenedorFrase>
                <h1>{quote}</h1>
                <p>{author}</p>
            </ContenedorFrase>
        </Fragment>
    );
};

export default Frase;