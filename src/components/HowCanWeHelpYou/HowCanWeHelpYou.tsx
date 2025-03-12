import { useState } from 'react';
import Stepper from '../Stepper/Stepper';
import { ButtonsContainer, Container, FormContainer, Input, NextButton, SubmitButton, TextContainer } from './styles';

function HowCanWeHelpYou() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', newsletter: true });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSelectOption = (option: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep - 1] = option;
    setAnswers(updatedAnswers);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    const allData = [...answers, formData];
    console.log(allData);
  };

  return (
    <Container id="how-can-we-help-you">
      <Stepper currentStep={currentStep} />

      {currentStep === 1 && (
        <TextContainer>
          <h1>¿Cómo podemos ayudarte?</h1>
          <h2>Selecciona todas las que apliquen</h2>
          <ButtonsContainer>
            {[ 'Conversar con un profesional', 'Generar informe policial psicológico', 'Asesoramiento para indemnización', 'Psicoterapia' ].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                style={{ backgroundColor: answers[currentStep - 1] === option ? '#001C3C' : 'white', color: answers[currentStep - 1] === option ? 'white' : '#001C3C' }}
              >
                {option}
              </button>
            ))}
          </ButtonsContainer>
        </TextContainer>
      )}

      {currentStep === 2 && (
        <TextContainer>
          <h1>¿Hace cuánto tiempo te <br />encuentras en esa empresa?</h1>
          <h2>Elige la opción que más se ajuste a ti</h2>
          <ButtonsContainer>
            {[ 'Menos de 1 año', 'Entre 1 y 5 años', 'Más de 5 años', 'Más de 10 años', 'Más de 15 años', 'Más de 20 años' ].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                style={{ backgroundColor: answers[currentStep - 1] === option ? '#001C3C' : 'white', color: answers[currentStep - 1] === option ? 'white' : '#001C3C' }}
              >
                {option}
              </button>
            ))}
          </ButtonsContainer>
        </TextContainer>
      )}

      {currentStep === 3 && (
        <TextContainer>
          <h1>¿Cuál es tu promedio <br />salarial anual?</h1>
          <h2>Elige la opción que más se ajuste a ti</h2>
          <ButtonsContainer>
            {[ '€12-20mil', '€20-40mil', '€40-60mil', '€60-80mil', '€80-100mil', 'más de €100mil' ].map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                style={{ backgroundColor: answers[currentStep - 1] === option ? '#001C3C' : 'white', color: answers[currentStep - 1] === option ? 'white' : '#001C3C' }}
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
            <Input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <Input type="tel" name="phone" placeholder="Teléfono de contacto" value={formData.phone} onChange={handleInputChange} />
          </div>
          <label>
            <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} /> Recibir nuestro newsletter gratuito
          </label>
          <div className="button-group">
            <SubmitButton onClick={handleSubmit}>Enviar información</SubmitButton>
            <SubmitButton secondary>Escríbenos a WhatsApp</SubmitButton>
          </div>
        </FormContainer>
      )}

      {currentStep < 4 && <NextButton onClick={handleNext}>Siguiente</NextButton>}
    </Container>
  );
}

export default HowCanWeHelpYou;
