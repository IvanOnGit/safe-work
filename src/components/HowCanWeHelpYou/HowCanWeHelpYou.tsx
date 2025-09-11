import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const [currentStep, setCurrentStep] = useState(0); // Cambiar a 0 para empezar en el paso inicial
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

  // Función para validar si el paso actual está completo
  const isCurrentStepValid = (): boolean => {
    if (currentStep === 0) {
      // Paso 0: Siempre válido, solo necesita hacer clic en "Empezar"
      return true;
    }
    
    const stepIndex = currentStep - 1;
    
    if (currentStep === 1) {
      // Paso 1: Debe tener una respuesta
      return answers[stepIndex] !== undefined && answers[stepIndex] !== '';
    } else if (currentStep === 2 || currentStep === 3) {
      // Paso 2 y 3: Debe tener al menos una selección
      return Array.isArray(answers[stepIndex]) && answers[stepIndex].length > 0;
    } else if (currentStep === 4) {
      // Paso 4: Todos los campos obligatorios deben estar completos
      return (
        formData.firstName.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.phone.trim() !== '' &&
        formData.legal === true // El checkbox legal debe estar marcado
      );
    }
    
    return false;
  };

  const handleNext = () => {
    if (currentStep === 0) {
      // Desde el paso 0, ir al paso 1
      setCurrentStep(1);
    } else if (isCurrentStepValid() && currentStep < 4) {
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
    // Verificar que el formulario esté válido antes de enviar
    if (!isCurrentStepValid()) {
      setModalStatus("error");
      setModalMessage("Por favor completa todos los campos obligatorios antes de enviar.");
      setModalOpen(true);
      return;
    }

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
        setCurrentStep(0); // Volver al paso 0 después de enviar
        setAnswers([]);

        // ✅ Redirigir a Calendly después de 3 segundos
        window.location.href = "https://cal.com/miguelayudaacosolaboral/consultoria-gratuita-30-minutos";
        
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
    <Container ref={containerRef} className={`${isVisible ? 'visible' : ''} ${currentStep === 0 ? 'step-0' : ''}`}>
      {/* Solo mostrar el Stepper si no estamos en el paso 0 */}
      {currentStep > 0 && <Stepper currentStep={currentStep} />}

      {/* Paso 0: Pantalla de inicio */}
      {currentStep === 0 && (
        <TextContainer>
          <h1>Responde estas 3 preguntas y recibe una guía jurídica para afrontar el acoso laboral.</h1>
          <NextButton onClick={handleNext}>
            Empezar
          </NextButton>
        </TextContainer>
      )}

      {currentStep === 1 && (
        <TextContainer>
          <h1>Empecemos por lo esencial <br />¿desde cuándo estás sufriendo acoso laboral?</h1>
          <h2>El tiempo deja huella. Saber cuánto llevas así <br />nos ayuda a entender mejor tu situación.</h2>
          <ButtonsContainer>
            {['Menos de 3 meses', 'Entre 3 y 6 meses', 'Entre 6 meses y 1 año', 'Más de 1 año'].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                style={{
                  backgroundColor: answers[currentStep - 1] === option ? '#88123c' : 'white',
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
          <h2>No estás exagerando. Identificar estas conductas es clave para ponerles límite.</h2>
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
                  backgroundColor: Array.isArray(answers[currentStep - 1]) && answers[currentStep - 1].includes(option) ? '#88123c' : 'white',
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
          <h1>¿Estás notando alguno de estos <br />síntomas en tu día a día?</h1>
          <h2>Identificarlos nos permite ofrecerte el apoyo adecuado.</h2>
          <ButtonsContainer>
            {['Ansiedad', 'Insomnio', 'Apatía y/o falta de energía', 'Somatizaciones'].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                style={{
                  backgroundColor: Array.isArray(answers[currentStep - 1]) && answers[currentStep - 1].includes(option) ? '#88123c' : 'white',
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
          <h1>¿Dónde te enviamos la guía jurídica gratuita <br />para ayudarte a actuar?</h1>
          <h2>Gracias por compartir lo que estás viviendo. Este último paso <br />nos permite enviarte los recursos que pueden ayudarte.</h2>
          <div className="input-group">
            <Input 
              type="text" 
              name="firstName" 
              placeholder="Primer nombre *" 
              required 
              value={formData.firstName} 
              onChange={handleInputChange}
              style={{
                borderColor: formData.firstName.trim() === '' ? '#ff6b6b' : undefined
              }}
            />
          </div>
          <div className="input-group">
            <Input 
              type="email" 
              name="email" 
              placeholder="Email *" 
              required 
              value={formData.email} 
              onChange={handleInputChange}
              style={{
                borderColor: formData.email.trim() === '' ? '#ff6b6b' : undefined
              }}
            />
            <Input 
              type="tel" 
              name="phone" 
              placeholder="Teléfono de contacto *" 
              required 
              value={formData.phone} 
              onChange={handleInputChange}
              style={{
                borderColor: formData.phone.trim() === '' ? '#ff6b6b' : undefined
              }}
            />
          </div>
          <ChecksContainer>
            <label>
              <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} /> Quiero recibir orientación sobre cómo afrontar mi caso y los recursos disponibles.
            </label>
            <label style={{ color: !formData.legal ? '#ff6b6b' : undefined }}>
              <input 
                type="checkbox" 
                name="legal" 
                checked={formData.legal} 
                onChange={handleInputChange}
                required
              /> 
              He leído y acepto el{' '}
              <Link 
                to="/legal" 
                target="_blank" 
                style={{ 
                  color: '#88123c', 
                  textDecoration: 'underline',
                  fontWeight: 'bold'
                }}
              >
                aviso legal
              </Link>
              {' '}y la{' '}
              <Link 
                to="/privacidad" 
                target="_blank" 
                style={{ 
                  color: '#88123c', 
                  textDecoration: 'underline',
                  fontWeight: 'bold'
                }}
              >
                política de privacidad
              </Link>
              {' '}*
            </label>
            <p>🔒 Tus datos serán tratados con total confidencialidad.</p>
          </ChecksContainer>
          <div className="button-group">
            <SubmitButton 
              onClick={handleSubmit}
              disabled={isSubmitting || !isCurrentStepValid()}
              style={{
                opacity: (!isCurrentStepValid() || isSubmitting) ? 0.5 : 1,
                cursor: (!isCurrentStepValid() || isSubmitting) ? 'not-allowed' : 'pointer'
              }}
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

      {/* Botón "Siguiente" solo se muestra en los pasos 1, 2 y 3 */}
      {currentStep >= 1 && currentStep < 4 && (
        <NextButton 
          onClick={handleNext}
          disabled={!isCurrentStepValid()}
          style={{
            opacity: !isCurrentStepValid() ? 0.5 : 1,
            cursor: !isCurrentStepValid() ? 'not-allowed' : 'pointer'
          }}
        >
          Siguiente
        </NextButton>
      )}
      
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