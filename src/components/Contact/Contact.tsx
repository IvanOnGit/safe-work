import { useState, useEffect } from "react";
import { 
  Container, 
  FormContainer, 
  TextContainer, 
  ModalOverlay, 
  ModalContent, 
  ModalTitle, 
  ModalMessage, 
  ModalButton,
  ChecksContainer, 
  TicksContainer,
  StyledParagraph
} from './styles';
import { Check } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "error";
  message: string;
}

const Modal = ({ isOpen, onClose, status, message }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalTitle status={status}>
          {status === "success" ? "¡Éxito!" : "Error"}
        </ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ModalButton onClick={onClose}>Cerrar</ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  legal: boolean;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    legal: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<"success" | "error">("success");
  const [modalMessage, setModalMessage] = useState("");
  const [showBooking, setShowBooking] = useState(false); // 👈 NUEVO estado

  const isFormValid = (): boolean =>
    formData.nombre.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.telefono.trim() !== "" &&
    formData.mensaje.trim() !== "" &&
    formData.legal === true;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      setModalStatus("error");
      setModalMessage("Por favor completa todos los campos obligatorios y acepta el aviso legal.");
      setModalOpen(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://safe-work-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setModalStatus("success");
        setModalMessage(data.message || "Correo enviado correctamente");
        setModalOpen(true);
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "", legal: false });
      } else {
        setModalStatus("error");
        setModalMessage(data.error || "Error al enviar el correo, intente más tarde");
        setModalOpen(true);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setModalStatus("error");
      setModalMessage("Hubo un problema al enviar el formulario. Intente más tarde.");
      setModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <Container id="contact">
      {!showBooking ? (
        <>
          <TextContainer>
            <h1>Da el primer paso para recuperar tu tranquilidad</h1>
            <p>Te escuchamos. Sin compromiso, con total confidencialidad.</p>
            <p>Rellena el formulario y nuestro equipo especializado valorará tu situación.</p>
            <p>En menos de 24 horas nos pondremos en contacto contigo para empezar a ayudarte.</p>

            <TicksContainer>
              <p><Check />Primera consulta gratuita</p>
              <p><Check />Atención especializada en acoso laboral</p>
              <p><Check />Total confidencialidad</p>
            </TicksContainer>

            <button onClick={() => setShowBooking(true)}>
              Quiero hablar con un experto
            </button>
            <button onClick={() => window.open(`https://wa.me/34622377041?text=${encodeURIComponent('Hola!, quiero consultar algunas dudas…')}`, '_blank')}>
              Contactar por WhatsApp
            </button>

            <StyledParagraph>
              <p>🔐 Tus datos están protegidos. Solo los usaremos para ponernos en contacto contigo.</p>
            </StyledParagraph>
          </TextContainer>

          <FormContainer>
            <form onSubmit={handleSubmit}>
              <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
              <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
              <textarea name="mensaje" placeholder="Mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
              <ChecksContainer>
                <label>
                  <input type="checkbox" name="legal" checked={formData.legal} onChange={handleChange} required />
                  He leído y acepto el aviso legal y la política de privacidad
                </label>
              </ChecksContainer>
              <button 
                type="submit"
                data-gtm-label="formulario_contacto_enviar"
                disabled={isSubmitting || !isFormValid()}
                style={{
                  opacity: (!isFormValid() || isSubmitting) ? 0.5 : 1,
                  cursor: (!isFormValid() || isSubmitting) ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="loader"></span>
                    <span>Enviando...</span>
                  </>
                ) : (
                  'Enviar'
                )}
              </button>
            </form>
          </FormContainer>
        </>
      ) : (
        <TextContainer>
          <iframe
            src="https://cal.com/miguelayudaacosolaboral/consultoria-gratuita-30-minutos"
            allow="camera; microphone; fullscreen"
          ></iframe>
        </TextContainer>
      )}

      <Modal 
        isOpen={modalOpen}
        onClose={closeModal}
        status={modalStatus}
        message={modalMessage}
      />
    </Container>
  );
}

export default Contact;
