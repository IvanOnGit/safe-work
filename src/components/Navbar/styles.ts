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
  width: 21rem;

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

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
    margin-right: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {   
    margin-right: 6rem;   
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #001c3c;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  text-align: left;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  /* Animación */
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")}; /* Evita clics cuando está oculto */

  a {
    color: white;
    text-decoration: none;
    font-family: "Inter", sans-serif;
  }
`;