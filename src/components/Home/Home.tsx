import BookAssestmentSection from '../BookAssestmentSection/BookAssestmentSection';
import Contact from '../Contact/Contact';
import FloatingButton from '../FloatingButton/FloatingButton';
import Footer from '../Footer/Footer';
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
          <h1>Demuestra el acoso laboral <br /> y recupera el control de tu vida.</h1>
          <p>
          Sabemos lo difícil que es vivir con ansiedad, sentirte invisible y tener miedo <br /> a no poder demostrar  lo que estás sufriendo, pero no estás solo/a.
          </p>
          <p>
          Nuestro equipo te acompaña dándote asistencia legal, psicológica y pericial, <br /> para que puedas defender tus derechos, hacer justicia y recuperar tu bienestar.
          </p>
        </TextContainer>
        <VideoContainer>
        <iframe
          id="youtube-player"
          src="https://www.youtube.com/embed/22zvzKSShPA?rel=0&autoplay=0&modestbranding=1&enablejsapi=1"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p>Miguel Pérez Urzay | Director | Psicólogo Forense y Sanitario | Docente Universitario | Especialista en Peritaje de Acoso Laboral</p>
        </VideoContainer>
        <HowCanWeHelpYou />
      </Container>
      <BookAssestmentSection />
      <OurServices />
      <Recomendations />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default Home;