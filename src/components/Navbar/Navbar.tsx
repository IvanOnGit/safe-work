import { useState } from "react";
import { Menu } from "lucide-react";
import { Container, ContainerLinks, Logo, MobileMenu, MenuButton } from "./styles";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
    setIsOpen(false);
  };

  const handleScrollToTopMobile = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsOpen(false);
  };

  return (
    <Container>
      <Logo src="/images/Logo.svg" alt="" />
      <ContainerLinks>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Inicio</a>
        <a href="#how-can-we-help-you" onClick={(e) => handleScroll(e, 'how-can-we-help-you')}>Cómo podemos ayudarte</a>
        <a href="#recomendations" onClick={(e) => handleScroll(e, 'recomendations')}>Casos de éxito</a>
        <a href="#why-us" onClick={(e) => handleScroll(e, 'why-us')}>Sobre Nosotros</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contacto</a>
      </ContainerLinks>
      
      {/* Botón para abrir/cerrar menú en mobile */}
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <Menu color="white" size={32} />
      </MenuButton>
      
      {/* Menú mobile con animación */}
      <MobileMenu isOpen={isOpen}>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Inicio</a>
        <a href="#how-can-we-help-you" onClick={(e) => handleScroll(e, 'how-can-we-help-you')}>Cómo podemos ayudarte</a>
        <a href="#recomendations" onClick={() => handleScrollToTopMobile('recomendations')}>Casos de éxito</a>
        <a href="#why-us" onClick={() => handleScrollToTopMobile('why-us')}>Sobre Nosotros</a>
        <a href="#contact" onClick={() => handleScrollToTopMobile('contact')}>Contacto</a>
      </MobileMenu>
    </Container>
  );
}

export default Navbar;