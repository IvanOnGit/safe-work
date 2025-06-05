import { useState, useRef, useEffect } from 'react';
import Stepper from '../Stepper/Stepper';
import { ButtonsContainer, Container, FormContainer, Input, NextButton, SubmitButton, TextContainer, ModalOverlay, ModalContent, ModalTitle, ModalMessage, ModalButton, ChecksContainer } from './styles';

// Modal component extracted from Contact.tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "error";
  message: string;
}

const Modal = ({ isOpen, onClose, status, message }: ModalProps) => {
  // Handle close with Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
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

function HowCanWeHelpYou() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<(string | string[])[]>([]);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', newsletter: true, legal: true });
  const [isVisible, setIsVisible] = useState(false);
  // Estado para controlar si el formulario está siendo enviado
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Estados para el modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<"success" | "error">("success");
  const [modalMessage, setModalMessage] = useState("");

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

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSelectOption = (option: string) => {
    const stepIndex = currentStep - 1;
    const updatedAnswers = [...answers];

    if (currentStep === 1) {
      // Paso 1: Solo una selección
      updatedAnswers[stepIndex] = option;
    } else {
      // Paso 2 y 3: Permitir múltiples selecciones
      if (!Array.isArray(updatedAnswers[stepIndex])) {
        updatedAnswers[stepIndex] = [];
      }

      const selectedOptions = updatedAnswers[stepIndex] as string[];

      if (selectedOptions.includes(option)) {
        updatedAnswers[stepIndex] = selectedOptions.filter(item => item !== option);
      } else {
        updatedAnswers[stepIndex] = [...selectedOptions, option];
      }
    }

    setAnswers(updatedAnswers);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Función para enviar evento al dataLayer
  const pushHelpClickEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'how_can_we_help_you_click'
    });
  };
  
  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async () => {
    // Activar el estado de envío
    setIsSubmitting(true);
    
    // Enviar evento al dataLayer antes de enviar el formulario
    pushHelpClickEvent();
    
    const allData = { answers, formData };

    try {
        const response = await fetch('https://safe-work-backend.onrender.com/api/contact/help-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
        });

        const data = await response.json();

         if (response.ok) {
        setModalStatus("success");
        setModalMessage(data.message || "¡Formulario enviado con éxito!");
        setModalOpen(true);

        setFormData({ firstName: '', lastName: '', email: '', phone: '', newsletter: true, legal: true });
        setCurrentStep(1);
        setAnswers([]);

        // ✅ Redirigir a Calendly después de 3 segundos
        window.location.href = "https://calendly.com/safeworkconsultagratuita/30min";
        
      } else {
        setModalStatus("error");
        setModalMessage(data.error || "Hubo un error al enviar el formulario. Intente más tarde.");
        setModalOpen(true);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setModalStatus("error");
      setModalMessage("Error de conexión con el servidor. Intente más tarde.");
      setModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container id="how-can-we-help-you" ref={containerRef} className={isVisible ? 'visible' : ''}>
      <Stepper currentStep={currentStep} />

      {currentStep === 1 && (
        <TextContainer>
          <h1>¿Desde hace cuánto estás <br />sufriendo acoso laboral?</h1>
          <h2>Elige la opción que más se ajuste a ti</h2>
          <ButtonsContainer>
            {['Menos de 3 meses', 'Entre 3 y 6 meses', 'Entre 6 meses y 1 año', 'Más de 1 año'].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                style={{
                  backgroundColor: answers[currentStep - 1] === option ? '#001C3C' : 'white',
                  color: answers[currentStep - 1] === option ? 'white' : '#001C3C'
                }}
              >
                {option}
              </button>
            ))}
          </ButtonsContainer>
        </TextContainer>
      )}

      {currentStep === 2 && (
        <TextContainer>
          <h1>¿Qué conductas estás sufriendo?</h1>
          <h2>Elige las opciones que correspondan</h2>
          <ButtonsContainer>
            {[
              'Me desprestigian personal y/o profesionalmente',
              'Me aíslan o dificultan que haga mi trabajo',
              'Me sobrecargan con tareas o no tengo casi ninguna',
              'Me discriminan de otras formas'
            ].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                style={{
                  backgroundColor: Array.isArray(answers[currentStep - 1]) && answers[currentStep - 1].includes(option) ? '#001C3C' : 'white',
                  color: Array.isArray(answers[currentStep - 1]) && answers[currentStep - 1].includes(option) ? 'white' : '#001C3C'
                }}
              >
                {option}
              </button>
            ))}
          </ButtonsContainer>
        </TextContainer>
      )}

      {currentStep === 3 && (
        <TextContainer>
          <h1>¿Tienes alguno de estos síntomas?</h1>
          <h2>Elige las opciones que correspondan</h2>
          <ButtonsContainer>
            {['Ansiedad', 'Insomnio', 'Apatía y/o falta de energía', 'Somatizaciones'].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                style={{
                  backgroundColor: Array.isArray(answers[currentStep - 1]) && answers[currentStep - 1].includes(option) ? '#001C3C' : 'white',
                  color: Array.isArray(answers[currentStep - 1]) && answers[currentStep - 1].includes(option) ? 'white' : '#001C3C'
                }}
              >
                {option}
              </button>
            ))}
          </ButtonsContainer>
        </TextContainer>
      )}

      {currentStep === 4 && (
        <FormContainer>
          <h1>¿Cómo podemos contactarte?</h1>
          <h2>Ingresa tu información debajo</h2>
          <div className="input-group">
            <Input type="text" name="firstName" placeholder="Primer nombre" required value={formData.firstName} onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <Input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleInputChange} />
            <Input type="tel" name="phone" placeholder="Teléfono de contacto" required value={formData.phone} onChange={handleInputChange} />
          </div>
          <ChecksContainer>
            <label>
              <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} /> Recibir información sobre como podemos ayudarte
            </label>
            <label>
              <input type="checkbox" name="legal" checked={formData.legal} onChange={handleInputChange} /> He leido y acepto el aviso legal y la política de privacidad
            </label>
          </ChecksContainer>
          <div className="button-group">
            <SubmitButton 
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loader"></span>
                  <span>Enviando...</span>
                </>
              ) : (
                'Enviar y agendar consultoría'
              )}
            </SubmitButton>
          </div>
        </FormContainer>
      )}

      {currentStep < 4 && <NextButton onClick={handleNext}>Siguiente</NextButton>}
      
      {/* Modal Component */}
      <Modal 
        isOpen={modalOpen}
        onClose={closeModal}
        status={modalStatus}
        message={modalMessage}
      />
    </Container>
  );
}

export default HowCanWeHelpYou;