
import styled from 'styled-components';

export const Container = styled.section`
    height: 40rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin-left: 5rem;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    margin-left: 20rem;
    gap: 1.5rem;

    h1 {
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }

    p {
        font-size: 1rem;
        font-weight: 100;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 768px) {
        margin-right: 2rem;
        margin-left: 2rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin-left: 5rem;
        margin-right: 1.6rem;
    }
`;

export const FormContainer = styled.div`
    padding: 2rem;
    background: white;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: flex;
    flex-direction: column;
    margin-right: 10rem;
    width: 25rem;
    form {
        display: flex;
        flex-direction: column;
        height: 25rem;
        gap: 1.5rem;

        input {
            border: none;
            border-bottom: 1px solid #D9D9D9;
            margin-bottom: 1rem;
            font-family: 'Inter', sans-serif;
            color: black;
            margin: 0;
            padding: 0;
            font-size: 0.8rem;
            outline: none;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }

        textarea {
            border: 1px solid #D9D9D9;
            padding: 1rem;
            border-radius: 0.5rem;
            resize: none;
            height: 10rem;
            outline: none;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }

        button {
            border: none;
            background-color: #001C3C;
            color: white;
            padding: 1rem;
            border-radius: 0.5rem;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        margin-right: 2rem;
        margin-left: 2rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin-left: 5rem;
        margin-right: 10rem;
    }
`;
