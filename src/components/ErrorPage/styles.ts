import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #001C3C;
    font-family: 'Inter', sans-serif;
    color: white;
    height: 100vh;
    gap: 3rem;

    img {
        width: 20rem;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

     h1 {
        font-size: 10rem;
        margin: 0;
        padding: 0;
        color: rgba(255, 255, 255, 0.1);
    }

    h2 {
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }

    button {
        background-color: white;
        color: #001C3C;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        margin-top: 3rem;
    }
`;