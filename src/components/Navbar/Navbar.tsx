import { useState } from "react";
import { Menu } from "lucide-react";
import { Container, ContainerLinks, Logo, MobileMenu, MenuButton } from "./styles";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Logo src="/images/Logo.svg" alt="" />
      <ContainerLinks>
        <a href="">Inicio</a>
        <a href="">Cómo podemos ayudarte</a>
        <a href="">Casos de éxito</a>
        <a href="">Sobre Nosotros</a>
        <a href="">Contacto</a>
      </ContainerLinks>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <Menu color="white" size={32} />
      </MenuButton>
      {isOpen && (
        <MobileMenu>
          <a href="">Inicio</a>
          <a href="">Cómo podemos ayudarte</a>
          <a href="">Casos de éxito</a>
          <a href="">Sobre Nosotros</a>
          <a href="">Contacto</a>
        </MobileMenu>
      )}
    </Container>
  );
}

export default Navbar;
