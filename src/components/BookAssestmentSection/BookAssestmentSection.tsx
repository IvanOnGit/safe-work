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
          Nuestro equipo de psicólogos y abogados expertos <span className="mobile-hide"><br /></span> 
          en mobbing te acompañaen cada paso <span className="mobile-hide"><br /></span> 
          para ayudarte a salir de esta situación, <span className="mobile-hide"><br /></span> 
          recuperar tu estabilidad emocional y <span className="mobile-hide"><br /></span> 
          y defender tus derechos con confianza.
        </p>
        <button 
          onClick={() => window.open("https://wa.me/34622377041?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20SafeWork.", "_blank")}
        >
          Agenda una asesoría
        </button>
      </TextContainer>
      <ImageContainer>
        <img src="/images/profesional.jpg" alt="" />
      </ImageContainer>
    </Container>
  );
}

export default BookAssestmentSection;