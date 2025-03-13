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
        <h2>RECUPERA TU PAZ EN EL TRABAJO</h2>
        <h1>
          Toma el control y pon fin al <span className="mobile-hide"><br /></span> 
          acoso laboral de una vez <span className="mobile-hide"><br /></span> por todas
        </h1>
        <p>
          Sentirte atrapada en un ambiente tóxico no es <span className="mobile-hide"><br /></span> 
          tu única opción. Con SafeWork, accede a un <span className="mobile-hide"><br /></span> 
          plan integral que combina asesoría legal, <span className="mobile-hide"><br /></span> 
          apoyo psicológico y estrategias efectivas para <span className="mobile-hide"><br /></span> 
          enfrentar el acoso laboral con confianza.
        </p>
        <button 
          onClick={() => window.open("https://wa.me/34622377041?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20SafeWork.", "_blank")}
        >
          Agenda una asesoría SafeWork
        </button>
      </TextContainer>
      <ImageContainer>
        <img src="/images/profesional.jpg" alt="" />
      </ImageContainer>
    </Container>
  );
}

export default BookAssestmentSection;