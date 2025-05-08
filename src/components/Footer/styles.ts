import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rem;
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

        @media (max-width: 768px) {
            width: 22rem;
            height: 22rem;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 2rem;

        gap: 2rem;

        h3 {
            width: auto;
        }

        h3:first-of-type {
            width: 20rem;
            text-align: justify;
            font-size: 0.9rem;
        }
    }
`;

export const MapWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const ButtonContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled.span`
  text-align: left;
  flex: 1;
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 14rem;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;

    svg {
      width: 1.2rem;

      @media (max-width: 768px) {
        width: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      width: 22rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h3 {
      width: 100%;
      text-align: center;
      margin-left: 12rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const DataProtection = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 12rem;
  gap: 2rem;
  margin-right: 2rem;

  button {
    border: none;
    background-color: white;
    color: #001C3C;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    svg {
      width: 1.2rem;

      @media (max-width: 768px) {
        width: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      width: 22rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 2rem;

    h3 {
      width: 100%;
      text-align: center;
      margin-left: 12rem;
    }
  }
`;
