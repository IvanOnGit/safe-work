
import styled from 'styled-components';

export const Container = styled.section`
    height: 40rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
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
`;

export const FormContainer = styled.div`
    padding: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background: white;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    display: flex;
    flex-direction: column;
    margin-right: 20rem;
    width: 15rem;
    form {
        display: flex;
        flex-direction: column;
        height: 20rem;
        gap: 1.5rem;

        input {
            border: none;
            border-bottom: 1px solid #D9D9D9;
            padding: 0.5rem;
            margin-bottom: 1rem;
            font-family: 'Inter', sans-serif;
            color: #D9D9D9;
            margin: 0;
            padding: 0;
            font-size: 0.7rem;
            outline: none;
        }

        textarea {
            border: 1px solid #D9D9D9;
            padding: 1rem;
            border-radius: 0.5rem;
            resize: none;
            height: 10rem;
            outline: none;
        }

        button {
            border: none;
            background-color: #001C3C;
            color: white;
            padding: 0.5rem;
            border-radius: 0.5rem;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
        }
    }
`;
