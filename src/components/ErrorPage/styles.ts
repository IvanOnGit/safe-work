import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #001C3C;
    font-family: 'Inter', sans-serif;
    color: white;
    height: 100vh;

    button {
        background-color: white;
        color: #001C3C;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
`;