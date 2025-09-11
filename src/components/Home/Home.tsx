import BookAssestmentSection from '../BookAssestmentSection/BookAssestmentSection';
import Contact from '../Contact/Contact';
import FloatingButton from '../FloatingButton/FloatingButton';
import Footer from '../Footer/Footer';
import HowCanWeHelpYou from '../HowCanWeHelpYou/HowCanWeHelpYou';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
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
          <p>✔ Consulta inicial sin compromiso <br />✔ Apoyo legal y psicológico <br />✔ Informe válido judicialmente</p>
          <button onClick={() => window.open('https://cal.com/miguelayudaacosolaboral/consultoria-gratuita-30-minutos')}>
            Quiero hablar con un experto</button>
        </VideoContainer>
        <HowCanWeHelpYou />
      </Container>
      <Pathing />
      <BookAssestmentSection />
      <Services />
      <Recomendations />
      <Contact />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default Home;