import styled from 'styled-components';

export const Container = styled.section`
    height: 40rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 0 5rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto 0 auto;

    @media (min-width: 768px) {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    &.visible {
        @media (min-width: 768px) {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        opacity: 1;
        transform: none;
        padding: 0 1rem;
        gap: 2rem;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box; /* Asegura que el padding se incluya en el width */
        margin-bottom: 2rem;
        background-color: #001C3C;
        margin-top: 2rem;
        padding-bottom: 3.5rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {   
        height: 35rem;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    gap: 1.5rem;

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        text-align: justify;
    }

    button {
        background-color: white;
        color: #001C3C;
        border: 1px solid #001C3C;
        padding: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;

        @media (max-width: 768px) {
            margin-bottom: 1rem;
        }
    }

    button:hover {
        background-color: #88123c;
        border: 1px solid white;
        color: white;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        margin-top: 5rem;
        color: white;

        .mobile-hide {
            display: none;
        }

        p {
            text-align: justify;
        }

        h1 {
            display: none;
        }

        h2 {
            font-size: 1.8rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        h1 {
            font-size: 1.5rem;
        }
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 35rem;
        height: 30rem;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }

    @media (max-width: 768px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {   
        img {
            width: 20rem;
            height: 20rem;
            object-fit: cover;
            object-position: center;
        }
    }
`;