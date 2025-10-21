import { useEffect } from 'react';
import { Container } from './styles';

function ThankYou() {
  useEffect(() => {
    // Disparar el evento de conversión al cargar la página
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'cal_booking_completed'
    });
  }, []); // Array vacío = se ejecuta solo una vez al montar el componente

  return (
    <Container>
      <h1>¡Gracias!</h1>
      <p>Hemos recibido tu solicitud correctamente.</p>
      <p>Nos pondremos en contacto contigo lo antes posible.</p>
    </Container>
  );
}

export default ThankYou;