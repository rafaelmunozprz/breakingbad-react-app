import styled from '@emotion/styled';

export const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 800px;
    @media (min-wdth: 992px) {
        margin-top: 10rem;
    }
    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        font-weight: bold;
        color: #666;
        margin-top: 2rem;
    }
`;

