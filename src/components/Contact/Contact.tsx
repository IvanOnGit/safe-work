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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <>
      <Container>
      <TextContainer>
        <h1>Queremos conocer tu situación, <br /> entremos en contacto</h1>
        <p>
          Para nosotros cada historia es importante, por eso trabajamos de <br />
          cerca con nuestros clientes, acompañándoles en cada parte del <br /> camino.
        </p>
        <p>
          ¿Te gustaría escribirnos por WhatsApp?{" "}
          <a 
            href="https://wa.me/34622377041?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            ¡Haz click Aquí!
          </a>
        </p>
      </TextContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
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