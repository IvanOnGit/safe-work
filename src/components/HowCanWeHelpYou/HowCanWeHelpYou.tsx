import { useState, useRef, useEffect } from 'react';
import Stepper from '../Stepper/Stepper';
import { ButtonsContainer, Container, FormContainer, Input, NextButton, SubmitButton, TextContainer } from './styles';

function HowCanWeHelpYou() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<(string | string[])[]>([]);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', newsletter: true });
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

  const handleSubmit = async () => {
    const allData = { answers, formData };

    try {
        const response = await fetch('https://safe-work-backend.onrender.com/api/contact/help-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
        });

        if (response.ok) {
            alert('¡Formulario enviado con éxito!');
        } else {
            alert('Hubo un error al enviar el formulario');
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Error de conexión con el servidor');
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
            <Input type="text" name="firstName" placeholder="Primer nombre" value={formData.firstName} onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <Input type="tel" name="phone" placeholder="Teléfono de contacto" value={formData.phone} onChange={handleInputChange} />
          </div>
          <label>
            <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} /> Recibir información sobre como podemos ayudarte
          </label>
          <div className="button-group">
            <SubmitButton onClick={handleSubmit}>Enviar información</SubmitButton>
            <SubmitButton secondary onClick={() => window.open("https://wa.me/34622377041?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20SafeWork.", "_blank")}>Escríbenos a WhatsApp</SubmitButton>
          </div>
        </FormContainer>
      )}

      {currentStep < 4 && <NextButton onClick={handleNext}>Siguiente</NextButton>}
    </Container>
  );
}

export default HowCanWeHelpYou;