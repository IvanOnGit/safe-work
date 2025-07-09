import BookAssestmentSection from '../BookAssestmentSection/BookAssestmentSection';
import Contact from '../Contact/Contact';
import FloatingButton from '../FloatingButton/FloatingButton';
import Footer from '../Footer/Footer';
import HowCanWeHelpYou from '../HowCanWeHelpYou/HowCanWeHelpYou';
import Navbar from '../Navbar/Navbar';
import OurServices from '../OurServices/OurServices';
import Pathing from '../Pathing/Pathing';
import Recomendations from '../Recomendations/Recomendations';
import { Container, TextContainer, VideoContainer } from './styles';

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <TextContainer id="home">
          <h1>Demuestra el acoso laboral <br /> y recupera el control de tu vida.</h1>
          <p>
          Recupera la calma, el sueño y la vida que el acoso te está robando.
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
          <p>No estás solo/a. Te acompaña un equipo psicolegal especializado únicamente en acoso laboral.</p>
          <p>✔ Consulta inicial sin compromiso ✔ Apoyo legal y psicológico ✔ Informe válido judicialmente</p>
          <button onClick={() => window.open('https://calendly.com/safeworkconsultagratuita/20min')}>
            Hablar con un experto</button>
        </VideoContainer>
        <HowCanWeHelpYou />
      </Container>
      <Pathing />
      <BookAssestmentSection />
      <OurServices />
      <Recomendations />
      <Contact />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default Home;