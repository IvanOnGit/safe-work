
import styled from 'styled-components';

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-family: 'Inter', sans-serif;

    h1 {
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-weight: 100;
        margin-bottom: 2rem;
    }

    .desktop-hide {
        display: none;
    }

    @media (max-width: 768px) {
        text-align: left;
        margin-left: 2rem;
        .mobile-hide {
            display: none;
        }

        .desktop-hide {
            display: inline;
        }
    }
`;

export const Container = styled.section`
  display: flex;
  align-items: stretch;
  background-color: white;
  height: rem;
  margin-left: 10rem;
  margin-right: 10rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {   
    height: 40rem;
    justify-content: center;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;

export const MobileContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  gap: 2.5rem;

@media (min-width: 768px) {
    display: none;
}
`;

export const ServiceCard = styled.div`
  background-color: #f8f9fa;
  text-align: center;
  flex: 1;
  box-shadow: none;
  border-left: 1px solid #e0e0e0;
  padding: 1rem;
  font-family: 'Inter', sans-serif;


  &:first-child {
    border-left: none;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  &:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  @media (max-width: 768px) {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 1rem;
    
  }
`;

export const IconWrapper = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background-color: #0d2538;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #0d2538;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const List = styled.ul`
  color: #555;
  font-size: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
  font-size: 1.2rem;
  li {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 1rem;
    padding-left: 0;
    margin-left: 4rem;
    margin-right: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 0;
    padding-left: 3rem;
    gap: 1.5rem;
  }
`;
