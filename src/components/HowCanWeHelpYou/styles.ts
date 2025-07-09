import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 1.5rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 27rem;
  width: 40rem;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(50px);
  margin-top: 30rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  font-family: 'Inter', sans-serif;
  gap: 2rem;
  color: #001C3C;
  text-align: center;
  
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }

  @media (max-width: 768px) {
    width: 18rem;
    height: auto; 
    padding: 1rem;
    position: relative;
    top: initial;
    left: initial;
    opacity: 1;
    margin-left: 18rem;
    margin-top: 20rem;
    transform: translate(-50%, -50%) translateY(0);
    
    &.step-0 {
      min-height: 30rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {   
    top: 20%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  h1 {
      color: #001C3C;
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
  }

  h2 {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: bold;
  }

  @media (max-width: 768px) {
      h2 {
        display: none;
      }

      h1 {
        width: 80%;
        font-size: 1rem;
      }
  }
`;

export const ButtonsContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  button {
    width: 15rem;
    padding: 1rem;
    background-color: white;
    color: #001C3C;
    border: 1px solid #D9D9D9;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }
`;

export const NextButton = styled.button`
  background-color: #88213c;
  color: white;
  padding: 1rem;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  font-weight: bold;

    &:hover {
        background-color: #c52138;
        color: white;
        transition: all 0.3s ease-in-out;
    }
`;

// Animación para el loader
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 1rem;
  }

  .input-group {
    display: flex;
    gap: 1rem;
    width: 31rem;
    justify-content: center;
  }

  .button-group {
    display: flex;
    gap: 1rem;

    button {
      padding: 1rem;
      font-family: 'Inter', sans-serif;
      font-weight: bold;
    }

    button:hover {
        background-color: #c52138;
        color: white;
        transition: all 0.3s ease-in-out;
    }
  }

  label {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {

    h1 {
      font-size: 1.2rem;
    }

    h2 {
      display: none;
    }
    .input-group {
      flex-direction: column;
      width: 100%;
      align-items: center;

      input {
        width: 80%;
      }
    }

    .button-group {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    label {
    font-size: 0.9rem;
    align-items: center;
    justify-content: center;

    input {
      margin: 0;
      padding: 0;
      margin-left: 1rem;
    }
  }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #D9D9D9;
  outline: none;
`;

export const SubmitButton = styled.button<{ secondary?: boolean }>`
  background-color: ${({ secondary }) => (secondary ? "#88213c" : "#88213c")};
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  width: 15rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  
  /* Estilos para el botón con loader */
  display: flex;
  align-items: center;
  justify-content: center;
  
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
  
  &:hover:not(:disabled) {
    background-color: #183a6c;
    transition: all 0.3s ease-in-out;
  }
`;

// Animación para el modal
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Estilos para el Modal - Añadidos desde el primer componente
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
  font-weight: bold;
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

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;

    input {
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    width: 80%;

    label {
      font-size: 0.8rem;
      text-align: justify;
    }
  }
`;