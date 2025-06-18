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
        <h2>Haz frente al acoso con apoyo legal y psicológico especializado</h2>
        <h1>
        Nadie debería sufrir acoso laboral<span className="mobile-hide"><br /></span> 
        ni tratos denigrantes en el trabajo.<span className="mobile-hide"><br /></span>
        </h1>
        <p>
          Nuestro equipo de psicólogos y abogados expertos 
          en mobbing te acompaña en cada paso 
          para ayudarte a salir de esta situación, 
          recuperar tu estabilidad emocional 
          y defender tus derechos con confianza.
        </p>
        <button 
          onClick={() => window.open("https://calendly.com/safeworkconsultagratuita/20min")}
        >
          Agenda una asesoría
        </button>
      </TextContainer>
      <ImageContainer>
        <img src="/images/SafeWork.png" alt="" />
      </ImageContainer>
    </Container>
  );
}

export default BookAssestmentSection;