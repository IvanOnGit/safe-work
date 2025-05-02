import { Container, TextContainer, TitleContainer, WhyUsContainer } from './styles';

function WhyUs() {
  return (
    <>
      <Container id="why-us">
        <TitleContainer>
          <h1>Dar el paso no es fácil, pero puede cambiarlo todo</h1>
        </TitleContainer>
        <WhyUsContainer>
          <img src="/images/WhyUs.jpg" alt="" />
          <TextContainer>
            <p>
              Sabemos que no es sencillo. Dar el paso genera muchas dudas, y 
              más cuando llevas tiempo en una situación que te desgasta tanto por dentro.
            </p>
            <p>
              Es normal tener miedo a no poder demostrar lo que estás viviendo, a 
              perder tu trabajo, a sentir que nadie te va a escuchar o que todo esto solo va a empeorar.
            </p>
            <p>
              También es normal pensar: “¿y si estoy exagerando?”, 
              “¿y si no sirve de nada?”, “¿y si solo pierdo tiempo y dinero?”.
            </p>
            <p>
              El acoso laboral te hace dudar incluso de ti mismo/a. Te aísla, 
              te agota y te empuja a callar por miedo a las consecuencias.
            </p>
            <p>
              Por eso, detrás de esta página, hay un equipo humano que entiende lo que estás viviendo. 
              Personas que han escuchado muchas historias como la tuya, y que están 
              aquí para ayudarte sin juzgarte, sin presionarte y con el respeto que mereces.
            </p>
            <p>
              Si te estás planteando pedir ayuda, este puede ser el comienzo de algo distinto. 
              Un primer paso hacia recuperar tu bienestar, tu estabilidad 
              y la seguridad de saber que estás haciendo lo correcto.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/34622377041?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20SafeWork.",
                  "_blank"
                )
              }
            >
              Comienza tu cambio
            </button>
          </TextContainer>
        </WhyUsContainer>
      </Container>
    </>
  );
}

export default WhyUs;