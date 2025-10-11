import { useEffect, useState, useRef } from 'react';
import { Container, ImageContainer, TextContainer } from './styles';

function BookAssestmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isDesktopOrTablet = window.innerWidth >= 768;
  
    if (!isDesktopOrTablet) {
      setIsVisible(true);
      return;
    }
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );
  
    const currentContainer = containerRef.current;
  
    if (currentContainer) observer.observe(currentContainer);
  
    return () => {
      if (currentContainer) observer.unobserve(currentContainer);
    };
  }, []);

  return (
    <Container ref={containerRef} className={isVisible ? 'visible' : ''}>
      <TextContainer>
        {!showBooking ? (
          <>
            <h2>El primer paso para terminar con el acoso es hablar con expertos que saben lo que estás viviendo.</h2>
            <p>
              Sabemos lo difícil que es poner en palabras lo que estás viviendo.
              Por eso te ofrecemos una primera consulta gratuita y sin compromiso con un experto en acoso laboral.
            </p>
            <p>En esta sesión de 30 minutos:</p>
            <p className='list'>
              ✓ Te escuchamos con atención y empatía <br />
              ✓ Valoramos si hay indicios de acoso laboral <br />
              ✓ Te explicamos qué opciones tienes <br />
              ✓ Resolvemos todas tus dudas sobre cómo podemos ayudarte <br />
            </p>
            <p>
              Es confidencial y totalmente orientada a que puedas empezar a recuperar el control de tu vida laboral y emocional.
            </p>
            <button onClick={() => setShowBooking(true)}>
              Quiero mi consulta gratuita
            </button>
          </>
        ) : (
          <iframe
            src="https://cal.com/miguelayudaacosolaboral/consultoria-gratuita-30-minutos"
            allow="camera; microphone; fullscreen"
          ></iframe>
        )}
      </TextContainer>
      {!showBooking && (
        <ImageContainer>
          <img src="/images/SafeWork.png" alt="Consulta gratuita sobre acoso laboral" />
        </ImageContainer>
      )}
    </Container>
  );
}

export default BookAssestmentSection;
