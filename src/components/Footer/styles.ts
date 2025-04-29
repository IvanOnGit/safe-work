import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30rem;
    background-color: #001C3C;
    font-family: 'Inter', sans-serif;
    color: white;

    h3 {
        margin: 0;
        padding: 0;
        width: 28rem;
    }

    iframe {
        border-radius: 1rem;
    }
`;

export const MapWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  gap: 2rem;

  button {
    border: none;
    background-color: white;
    color: #001C3C;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.2rem;
      margin-bottom: 0.2rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;