import styled from 'styled-components';

export const Container = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  padding: 0 5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
    gap: 3rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 4rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  gap: 1.5rem;

  h1 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    text-align: justify;
  }

  .desktop-br {
    display: inline;

    @media (max-width: 768px) {
      display: none;
    }
  }

  button {
    background-color: #001C3C;
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    width: 12rem;

    @media (max-width: 768px) {
      width: 100%;
    }

    &:hover {
      background-color: #183a6c;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const FormContainer = styled.div`
  padding: 2rem;
  background: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  display: flex;
  flex-direction: column;
  width: 25rem;

  form {
    display: flex;
    flex-direction: column;
    height: 25rem;
    gap: 2.2rem;

    input {
      border: none;
      border-bottom: 1px solid #D9D9D9;
      font-family: 'Inter', sans-serif;
      color: black;
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
      font-size: 1rem;

      &:hover {
        background-color: #183a6c;
        transition: all 0.3s ease-in-out;
      }
    }

    @media (max-width: 768px) {
      height: auto;
      gap: 3rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 22rem;
  }
`;
