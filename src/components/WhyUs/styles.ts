import styled from 'styled-components';

export const Container = styled.section`
    height: 40rem;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;
`;

export const TitleContainer = styled.div`
    margin-bottom: 1rem;
    margin-right: 24rem;
    text-align: left;

    h1 {
        font-size: 1.5rem;
        font-family: 'Inter', sans-serif;
        color: #001C3C;
    }
`;

export const WhyUsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

    img {
        height: 26rem;
        width: 25rem;
        object-fit: cover;
        object-position: center;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        color: #001C3C;
        margin: 0;
        padding: 0;
    }

    button {
        background-color: #001C3C;
        color: white;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        width: 10rem;
    }
`;