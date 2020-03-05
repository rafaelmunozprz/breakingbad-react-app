import styled from '@emotion/styled';

export const ContenedorApp = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

export const BotonApp = styled.button`
    background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size .8s ease;
    :hover{
        cursor: pointer;
        background-size: 400px;
    }
`;

