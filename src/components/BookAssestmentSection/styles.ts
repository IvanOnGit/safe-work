import styled from 'styled-components';

export const Container = styled.section`
    height: 40rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24rem;

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
        height: 40rem;
        opacity: 1;
        transform: none;
        margin-top: 35rem;
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
    margin-left: 10rem;
    gap: 1.5rem;

    h1 {
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 100;
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
        font-size: 1.1rem;
    }

    button {
    background-color: white;
    color: #001C3C;
    border: 1px solid #001C3C;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1rem;
    
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
    }

    button:hover {
    background-color: #001C3C;
    color: white;
    transition: all 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        margin-left: 2rem;
        margin-right: 2rem;
        margin-top: 5rem;

        .mobile-hide {
            display: none;
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
    margin-right: 10rem;

    img {
        width: 35rem;
        height: 25rem;
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