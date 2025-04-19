import { useState } from "react";
import { Container, FormContainer, TextContainer } from './styles';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://safe-work-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un problema al enviar el formulario.');
    }
  };

  return (
    <>
      <Container id="contact">
      <TextContainer>
        <h1>Cuéntanos tu caso y te ayudaremos <br /> a saber cómo actuar</h1>
        <p>
        Rellena este formulario de forma sencilla y confidencial.
        </p>
        <p>
        Nuestro equipo valorará tu situación y te responderá con <br/>orientación profesional y sin
        compromiso.
        </p>
        <p>
        Estamos aquí para ayudarte a dar el primer paso, con respeto, <br />escucha y total
        discreción.
        </p>
        
        <button onClick={() => window.open('https://wa.me/34622377041?text=Hola, me gustaría saber más sobre sus servicios.', '_blank')}>
        Escríbenos por WhatsApp
        </button>
      </TextContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
            >
              Enviar
            </button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}

export default Contact;