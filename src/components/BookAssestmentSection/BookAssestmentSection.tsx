import { Container, ImageContainer, TextContainer} from './styles';

function BookAssestmentSection() {
  return (
    <>
      <Container>
        <TextContainer>
            <h2>RECUPERA TU PAZ EN EL TRABAJO</h2>
            <h1>Toma el control y pon fin al <br /> acoso laboral de una vez <br /> por todas</h1>
            <p>Sentirte atrapada en un ambiente tóxico no es <br /> tu única opción. Con SafeWork, accede a un <br /> plan integral que combina asesoría legal, <br /> apoyo psicológico y estratégias efectivas para <br /> enfrentar el acoso laboral con confianza.</p>
            <button>Agenda una asesoría SafeWork</button>
        </TextContainer>
        <ImageContainer>
            <img src="/images/profesional.jpg" alt="" />
        </ImageContainer>
      </Container>
    </>
  );
}

export default BookAssestmentSection;