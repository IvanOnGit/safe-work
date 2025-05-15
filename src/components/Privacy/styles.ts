import styled from 'styled-components';

export const Container = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
`;

export const Navbar = styled.div`
  background-color: #001c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;

  svg {
    width: 2rem;
    color: white;
    position: absolute;
    left: 0;
    margin-left: 5rem;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-left: 1rem;
    }
  }

  h1 {
    color: white;
  }
`;

export const InnerText = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;

  
  @media (max-width: 768px) {
    width: 80%;
    
    h2 {
      text-align: center;
    }
  }
`;