import Navbar from '../Navbar/Navbar';
import { Container, TextContainer, VideoContainer } from './styles';

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <TextContainer>
          <h1>Justicia para ti, <br /> respaldo en cada paso.</h1>
          <p>
          Compensaciones laborales adecuadas y asistencia psicológica <br /> efectiva: nuestra misión es que nuestros clientes se sientan <br /> respaldados en todo momento.
          </p>
        </TextContainer>
        <VideoContainer>
          <img src="/images/HeroVideo.webp" alt="" />
        </VideoContainer>
      </Container>
    </>
  );
}

export default Home;