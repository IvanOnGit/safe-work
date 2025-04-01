import styled from 'styled-components';

export const Container = styled.section`
  height: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  padding: 2rem 1rem;

  h1 {
    font-size: 1.75rem;
    font-family: 'Inter', sans-serif;
    text-align: center;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
  }
`;

export const RecomendationsContainer = styled.div`
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px, rgba(14, 30, 37, 0.32) 0px 2px 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 85%;
  max-width: 700px;
  border-radius: 12px;
  height: 22rem; /* Altura fija para evitar cambios */
  overflow: hidden; /* Evita que el contenido sobrepase la tarjeta */

  @media (max-width: 768px) {
    height: 45rem;
  }
`;

export const TextContainer = styled.div`
  font-family: 'Inter', sans-serif;
  text-align: left;
  line-height: 1.6;
  font-size: 1rem;
  flex-grow: 1; /* Permite que el texto se acomode sin cambiar el tamaño */
  overflow: hidden; /* Asegura que el texto largo no modifique la altura */
`;

export const PersonAndLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PersonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileImage = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const NameOcupationAndStars = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }

  h2 {
    font-size: 0.9rem;
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const RecomendationsLogo = styled.img`
  width: 4rem;
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 4rem;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #f5f5f5;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;