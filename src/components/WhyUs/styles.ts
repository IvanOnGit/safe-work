import styled from 'styled-components';

export const Container = styled.section`
  height: auto;
  min-height: 40rem;
  background-color: #E6E6E6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    background-color: #E6E6E6;
    top: 0;
    margin-top: 3rem;
    padding: 2rem 0 3rem 0;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  text-align: left;

  h1 {
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    color: #001C3C;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const WhyUsContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 72rem;
  padding: 0 1rem;

  img {
    height: 31rem;
    width: 25rem;
    object-fit: cover;
    object-position: center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;

    @media (max-width: 768px) {
      height: 20rem;
      width: 20rem;
      align-self: center;
      margin-bottom: 2rem;
      border-radius: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.65rem;
  width: 45rem;
  max-width: 100%;
  position: relative;

  p {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    color: #001C3C;
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
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
    width: 11rem;
    font-size: 0.9rem;
    align-self: flex-start;

    @media (max-width: 768px) {
      width: 100%;
      align-self: center;
      padding: 1rem;
      font-size: 1rem;
      margin-top: 1rem;
    }

    &:hover {
      background-color: #183a6c;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;