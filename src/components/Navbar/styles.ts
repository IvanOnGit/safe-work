import styled from "styled-components";

export const Container = styled.div`
  background-color: #001c3c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
`;

export const Logo = styled.img`
  margin-left: 6.81rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    width: 12rem;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 5.81rem;

  a {
    color: white;
    text-decoration: none;
    font-family: "Inter", sans-serif;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-right: 1rem;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  background-color: #001c3c;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  text-align: left;
  a {
    color: white;
    text-decoration: none;
    font-family: "Inter", sans-serif;
  }
`;