import { Brain, Check, NotepadText, Scale } from 'lucide-react';
import { Card, CardsContainer, Container, ParagraphContainer } from './styles';

function Services() {
  return (
    <>
      <Container>
        <h1>Un acompañamiento integral, adaptado a lo que necesitas</h1>
        <h2>Puedes acceder a cada servicio por separado o a un plan de acción completo, adaptado a tu situación y a lo que realmente necesites.</h2>
        <CardsContainer>
            <Card className='law'>
                <Scale />
                <h2>DEFENZA LEGAL</h2>
                <ParagraphContainer>
                    <p><Check />Obtén un plan de acción legal claro y adaptado a tu caso, con pasos concretos para afrontar la situación de forma segura.</p>
                    <p><Check />Recibe apoyo legal en cada fase del proceso, desde la activación del protocolo de acoso hasta una posible reclamación judicial.</p>
                    <p><Check />Protege tus derechos sin ponerte en riesgo, aprendiendo cómo recopilar pruebas y actúa con seguridad gracias a representación legal especializada.</p>
                </ParagraphContainer>
            </Card>
            <Card className='paper'>
                <NotepadText />
                <h2>INFORME PERICIAL PSICOLÓGICO</h2>
                <ParagraphContainer>
                    <p><Check />Objetiva el daño psicológico que estás sufriendo con una prueba pericial que demuestra el impacto del acoso en tu salud mental.</p>
                    <p><Check />Demuestra la existencia del acoso con indicadores psicológicos medibles y objetivos, elaborados por profesionales.</p>
                    <p><Check />Refuerza tu posición legal y fundamenta tu derecho a reclamar una indemnización por daño moral, tanto en vía interna como judicial.</p>
                </ParagraphContainer>
            </Card>
            <Card className='brain'>
                <Brain />
                <h2>TERÁPIA PSICOLÓGICA ESPECIALIZADA</h2>
                <ParagraphContainer>
                    <p><Check />Supera la ansiedad y el daño emocional que el acoso te está causando a ti y a tu entorno más cercano.</p>
                    <p><Check />Recupera el control sobre tu vida con herramientas que te permitan poner fin a la situación y afrontar el proceso con estabilidad.</p>
                    <p><Check />Recibe acompañamiento emocional especializado, mejora tu autoestima y vuelve a sentirte bien contigo mismo/a y con los que te rodean.</p>
                </ParagraphContainer>
            </Card>
        </CardsContainer>
      </Container>
    </>
  );
}

export default Services;