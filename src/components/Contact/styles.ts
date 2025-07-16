import styled, { keyframes } from 'styled-components';

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
  width: 40rem;

  h1 {
    font-size: 2rem;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      text-align: center;
    }
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
    background-color: #88123c;
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    cursor: pointer;
    width: 14rem;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
    }

    &:hover {
      background-color: #c52138;
      transition: all 0.3s ease-in-out;
    }
  }

  button:last-of-type {

    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Animación para el loader
const spin = keyframes`
  to { transform: rotate(360deg); }
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
      background-color: #88123c;
      color: white;
      padding: 1rem;
      border-radius: 0.5rem;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      &:hover {
        background-color: #c52138;
        transition: all 0.3s ease-in-out;
      }

      /* Estilo para cuando el botón está deshabilitado */
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      /* Estilo para el loader dentro del botón */
      .loader {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: ${spin} 1s ease-in-out infinite;
        margin-right: 8px;
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

// Animación para el modal
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Estilos para el Modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeIn} 0.4s ease-in-out;
`;

export const ModalTitle = styled.h3<{ status: string }>`
  color: ${props => props.status === "error" ? "#e74c3c" : "#27ae60"};
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
`;

export const ModalMessage = styled.p`
  margin: 0;
  color: #333;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
`;

export const ModalButton = styled.button`
  background-color: #001C3C;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.8rem 1.5rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  font-weight: 500;
  align-self: center;

  &:hover {
    background-color: #183a6c;
    transition: all 0.3s ease-in-out;
  }
`;

export const ChecksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    font-size: 0.9rem;

    input {
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    label {
      font-size: 0.8rem;
      text-align: justify;
    }
  }
`;

export const TicksContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const StyledParagraph = styled.div`
p {
  margin: 0;
  padding: 0;
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.5);
}
`;