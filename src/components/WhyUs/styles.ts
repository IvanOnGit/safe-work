import styled from 'styled-components';

export const Container = styled.section`
    height: 40rem;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;

    @media (max-width: 768px) {
        background-color: #E6E6E6;
        top: 0;
        margin-top: 3rem;
        padding-top: 0;
        height: auto;
    }
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

    @media (max-width: 768px) {
        margin-right: 1rem;
        margin-left: 2rem;
        
    }
`;

export const WhyUsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

    img {
        height: 30rem;
        width: 25rem;
        object-fit: cover;
        object-position: center;

        @media (max-width: 768px) {
            height: 20rem;
            width: 20rem;
            align-self: center;
            margin-bottom: 3rem;
            border-radius: 1rem;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
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

        @media (max-width: 768px) {
            position: absolute;
            margin-top: 56.5rem;
            width: 20rem;
            align-self: center;
            padding: 1rem;
        }
    }

    @media (max-width: 768px) {
        margin-left: 2rem;
        margin-right: 2rem;
    }
`;