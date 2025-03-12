import BookAssestmentSection from '../BookAssestmentSection/BookAssestmentSection';
import Contact from '../Contact/Contact';
import HowCanWeHelpYou from '../HowCanWeHelpYou/HowCanWeHelpYou';
import Navbar from '../Navbar/Navbar';
import OurServices from '../OurServices/OurServices';
import Recomendations from '../Recomendations/Recomendations';
import WhyUs from '../WhyUs/WhyUs';
import { Container, TextContainer, VideoContainer } from './styles';

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <TextContainer id="home">
          <h1>Justicia para ti, <br /> respaldo en cada paso.</h1>
          <p>
          Compensaciones laborales adecuadas y asistencia psicológica <br /> efectiva: nuestra misión es que nuestros clientes se sientan <br /> respaldados en todo momento.
          </p>
        </TextContainer>
        <VideoContainer>
          <img src="/images/HeroVideo.webp" alt="" />
        </VideoContainer>
        <HowCanWeHelpYou />
      </Container>
      <BookAssestmentSection />
      <OurServices />
      <Recomendations />
      <WhyUs />
      <Contact />
    </>
  );
}

export default Home;