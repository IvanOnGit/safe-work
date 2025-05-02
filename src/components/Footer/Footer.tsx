import { Linkedin } from 'lucide-react';
import { Container, InfoContainer, MapWrapper, StyledLink } from './styles';

function Footer() {
  return (
    <Container>
      <div>
        <h3>Trabajamos en toda España, encontranos en: Calle de Manzanares Nº 4, 28005, Madrid</h3>
        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.2276754715535!2d-3.7179511846073864!3d40.40765526429747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42263ab15e7f29%3A0x5e83a5129ebfdc33!2sCalle%20de%20Manzanares%2C%204%2C%2028005%20Madrid!5e0!3m2!1ses!2ses!4v1683123627070!5m2!1ses!2ses"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapWrapper>
      </div>
      <InfoContainer>
        <h3>Información útil:</h3>
        <StyledLink to="https://www.linkedin.com/company/safeworksolutions1/posts/?feedView=all">
            <button>Encuentranos en LinkedIn <Linkedin /></button>
        </StyledLink>
        <StyledLink to="https://www.linkedin.com/in/miguelperezurzay/">
            <button>Miguel Urzay en LinkedIn <Linkedin /></button>
        </StyledLink>
      </InfoContainer>
    </Container>
  );
}

export default Footer;
