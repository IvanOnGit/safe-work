import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 1rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 25rem;
  width: 40rem;
  position: absolute;
  top: 50%;
  left: 50%;
  /* Modificamos el transform para combinar el posicionamiento con la animación */
  transform: translate(-50%, -50%) translateY(50px);
  margin-top: 30rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  font-family: 'Inter', sans-serif;
  gap: 2rem;
  color: #001C3C;
  text-align: center;
  
  /* Estilos de animación */
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0); /* Deslizar hacia arriba cuando sea visible */
  }

  @media (max-width: 768px) {
    width: 18rem;
    height: auto;
    top: 60%;
    /* Siempre visible en móvil */
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0); /* Sin animación en móvil */
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
  }

  h2 {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: 100;
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
  }
`;

export const NextButton = styled.button`
  background-color: #001C3C;
  color: white;
  padding: 1rem;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
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
  }

  h2 {
    margin: 0;
    padding: 0;
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
    margin-top: 1rem;

    button {
      padding: 1rem;
    }

    button:hover {
        background-color: #183a6c;
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
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #D9D9D9;
  outline: none;
`;

export const SubmitButton = styled.button<{ secondary?: boolean }>`
  background-color: ${({ secondary }) => (secondary ? "#001C3C" : "#001C3C")};
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  width: 15rem;
  text-align: center;
`;