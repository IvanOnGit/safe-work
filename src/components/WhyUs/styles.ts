import styled from 'styled-components';

export const Container = styled.section`
  height: 40rem;
  background-color: 
#E6E6E6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;

  @media (max-width: 768px) {
    background-color: 
#E6E6E6;
    top: 0;
    margin-top: 3rem;
    padding-top: 0;
    height: auto;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 1rem;
  margin-right: 36.5rem;
  text-align: left;

  h1 {
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    color: 
#001C3C;
  }

  @media (max-width: 768px) {
    margin-right: 1rem;
    margin-left: 2rem;
  }
`;

export const WhyUsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

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
      margin-bottom: 3rem;
      border-radius: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 5rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.65rem;
  width: 45rem;

  p {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    color: 
#001C3C;
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
    background-color: 
#001C3C;
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    width: 11rem;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      position: absolute;
      margin-top: 68rem;
      width: 20rem;
      align-self: center;
      padding: 1rem;
      font-size: 1rem;
    }

    &:hover {
      background-color: 
#183a6c;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    width: 22rem;
  }
`;