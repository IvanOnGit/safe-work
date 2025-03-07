import { Container, ContainerLinks, Logo } from './styles';

function Navbar() {
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
    </Container>
  );
}

export default Navbar;