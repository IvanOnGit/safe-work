import { Container, TextContainer, TitleContainer, WhyUsContainer } from './styles';
function WhyUs() {
  return (
    <>
      <Container id="why-us">
        <TitleContainer>
            <h1>¿Por qué elegir SafeWork como la empresa que <br />te acompaña y te da soporte?</h1>
        </TitleContainer>
        <WhyUsContainer>
            <img src="/images/WhyUs.jpg" alt="" />
            <TextContainer>
                <p>
                ¿Sientes que has buscado apoyo pero solo has encontrado <br />respuestas vacías y soluciones superficiales?
                </p>
                <p>
                ¿Sigues lidiando con el acoso laboral, sin una guía clara y con la <br />sensación de estar solo en esto?. Si esta es tu realidad, estamos <br />aquí para ayudarte.
                </p>
                <p>
                En SafeWork, te brindamos el acompañamiento y las <br />herramientas necesarias para enfrentar tu situación con <br />seguridad.
                </p>
                <p>
                Te guiamos paso a paso para que tomes decisiones informadas <br />y recuperes el control de tu vida profesional.
                </p>
                <p>
                Si estás listo para recibir el apoyo que mereces y construir una <br />solución real, agenda una consulta hoy mismo.
                </p>
                <button  onClick={() => window.open("https://wa.me/34622377041?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20SafeWork.", "_blank")}>Comienza tu cambio</button>
            </TextContainer>
        </WhyUsContainer>
      </Container>
    </>
  );
}

export default WhyUs;