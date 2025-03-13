import { Container, ImageContainer, TextContainer} from './styles';

function BookAssestmentSection() {
  return (
    <>
      <Container>
        <TextContainer>
            <h2>RECUPERA TU PAZ EN EL TRABAJO</h2>
            <h1>Toma el control y pon fin al <span className="mobile-hide"><br /></span> acoso laboral de una vez <span className="mobile-hide"><br /></span> por todas</h1>
            <p>Sentirte atrapada en un ambiente tóxico no es <span className="mobile-hide"><br /></span> tu única opción. Con SafeWork, accede a un <span className="mobile-hide"><br /></span> plan integral que combina asesoría legal, <span className="mobile-hide"><br /></span> apoyo psicológico y estratégias efectivas para <span className="mobile-hide"><br /></span> enfrentar el acoso laboral con confianza.</p>
            <button 
              onClick={() => window.open("https://wa.me/34622377041?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20SafeWork.", "_blank")}
            >
              Agenda una asesoria SafeWork
          </button>
        </TextContainer>
        <ImageContainer>
            <img src="/images/profesional.jpg" alt="" />
        </ImageContainer>
      </Container>
    </>
  );
}

export default BookAssestmentSection;