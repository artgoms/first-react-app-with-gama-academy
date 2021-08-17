import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center; 
    justify-content: center;
`


export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5em;
    padding: 0 .5em;
    border-radius: .25em 0 0 .25em;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button `
    height: 1.5em;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25em .25em 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`
export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65em;
    color: red;
    font-weight: 600;
    margin-top: 1em;
`