import { useState } from "react";
import { Menu } from "lucide-react";
import { Container, ContainerLinks, Logo, MobileMenu, MenuButton } from "./styles";

// Añadimos la definición de tipos para window.dataLayer
interface DataLayerEvent {
  event: string;
  // Add other properties as needed
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

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

  const pushHelpClickEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'how_can_we_help_you_click'
    });
  };

  return (
    <Container>
      <Logo src="/images/Logo.svg" alt="" />
      <ContainerLinks>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Inicio</a>
        <a
          href="#how-can-we-help-you"
          onClick={(e) => {
            pushHelpClickEvent();
            handleScroll(e, 'how-can-we-help-you');
          }}
        >
          Cómo podemos ayudarte
        </a>
        <a href="#recomendations" onClick={(e) => handleScroll(e, 'recomendations')}>Casos de éxito</a>
        <a href="#why-us" onClick={(e) => handleScroll(e, 'why-us')}>Sobre Nosotros</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contacto</a>
      </ContainerLinks>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <Menu color="white" size={32} />
      </MenuButton>

      <MobileMenu isOpen={isOpen}>
        <a href="">Inicio</a>
        <a
          href="#how-can-we-help-you"
          onClick={(e) => {
            e.preventDefault();
            pushHelpClickEvent();
            handleScrollToTopMobile('how-can-we-help-you');
          }}
        >
          Cómo podemos ayudarte
        </a>
        <a href="#recomendations" onClick={() => handleScrollToTopMobile('recomendations')}>Casos de éxito</a>
        <a href="#why-us" onClick={() => handleScrollToTopMobile('why-us')}>Sobre Nosotros</a>
        <a href="#contact" onClick={() => handleScrollToTopMobile('contact')}>Contacto</a>
      </MobileMenu>
    </Container>
  );
}

export default Navbar;