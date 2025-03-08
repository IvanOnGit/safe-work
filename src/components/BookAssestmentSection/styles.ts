import styled from 'styled-components';

export const Container = styled.section`
    height: 40rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15rem;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    margin-left: 10rem;
    gap: 1.5rem;

    h1 {
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 1rem;
        font-weight: 100;
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
    }

    button {
    background-color: white;
    color: #001C3C;
    border: 1px solid #001C3C;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    }

    button:hover {
    background-color: #001C3C;
    color: white;
    transition: all 0.3s ease-in-out;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 10rem;

    img {
        width: 35rem;
        height: 25rem;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
`;