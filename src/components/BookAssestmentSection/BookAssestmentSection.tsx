import { useEffect, useState, useRef } from 'react';
import { Container, ImageContainer, TextContainer } from './styles';

function BookAssestmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Detecta si la pantalla es mayor a 768px
    const isDesktopOrTablet = window.innerWidth >= 768;
  
    if (!isDesktopOrTablet) {
      setIsVisible(true); // Siempre visible en mobile
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
  
    const currentContainer = containerRef.current; // Copy the value to a local variable
  
    if (currentContainer) {
      observer.observe(currentContainer);
    }
  
    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  return (
    <Container ref={containerRef} className={isVisible ? 'visible' : ''}>
      <TextContainer>
        <h2>El primer paso para terminar con el acoso es hablar con expertos que saben lo que estás viviendo.</h2>
        <p>
          Sabemos lo difícil que es poner en palabras lo que estás viviendo.
          Por eso te ofrecemos una primera consulta gratuita y sin compromiso con un experto en acoso laboral.
        </p>
        <p>En esta sesión de 30 minutos:</p>
        <p>
        ✓ Te escuchamos con atención y empatía <br />
        ✓ Valoramos si hay indicios de acoso laboral <br />
        ✓ Te explicamos qué opciones tienes <br />
        ✓ Resolvemos todas tus dudas sobre cómo podemos ayudarte <br />
        </p>
        <p>Es confidencial y totalmente orientada a que puedas empezar a recuperar el control de tu vida laboral y emocional</p>
        <button 
          onClick={() => window.open("https://calendly.com/safeworkconsultagratuita/20min")}
        >
          Quiero mi consulta gratuita
        </button>
      </TextContainer>
      <ImageContainer>
        <img src="/images/SafeWork.png" alt="" />
      </ImageContainer>
    </Container>
  );
}

export default BookAssestmentSection;