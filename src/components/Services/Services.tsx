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
                    <p>
                    <Check />
                    <span><strong>Obtén un plan de acción legal claro y adaptado a tu caso</strong>, con pasos concretos para afrontar la situación de forma segura.</span>
                    </p>
                    <p>
                    <Check />
                    <span><strong>Recibe apoyo legal en cada fase del proceso</strong>, desde la activación del protocolo de acoso hasta una posible reclamación judicial.</span>
                    </p>
                    <p>
                    <Check />
                    <span><strong>Protege tus derechos sin ponerte en riesgo</strong>, aprendiendo cómo recopilar pruebas y actúa con seguridad gracias a representación legal especializada.</span>
                    </p>
                </ParagraphContainer>
            </Card>
            <Card className='paper'>
                <NotepadText />
                <h2>INFORME PERICIAL PSICOLÓGICO</h2>
                <ParagraphContainer>
                    <p>
                    <Check />
                    <span><strong>Objetiva el daño psicológico que estás sufriendo</strong> con una prueba pericial que demuestra el impacto del acoso en tu salud mental.</span>
                    </p>
                    <p>
                    <Check />
                    <span><strong>Demuestra la existencia del acoso</strong> con indicadores psicológicos medibles y objetivos, elaborados por profesionales.</span>
                    </p>
                    <p>
                    <Check />
                    <span><strong>Refuerza tu posición legal</strong> y fundamenta tu derecho a reclamar una indemnización por daño moral, tanto en vía interna como judicial.</span>
                    </p>
                </ParagraphContainer>
            </Card>
            <Card className='brain'>
                <Brain />
                <h2>TERÁPIA PSICOLÓGICA ESPECIALIZADA</h2>
                <ParagraphContainer>
                    <p>
                    <Check />
                    <span><strong>Supera la ansiedad y el daño emocional</strong> que el acoso te está causando a ti y a tu entorno más cercano.</span>
                    </p>
                    <p>
                    <Check />
                    <span><strong>Recupera el control sobre tu vida</strong> con herramientas que te permitan poner fin a la situación y afrontar el proceso con estabilidad.</span>
                    </p>
                    <p>
                    <Check />
                    <span><strong>Recibe acompañamiento emocional especializado</strong>, mejora tu autoestima y vuelve a sentirte bien contigo mismo/a y con los que te rodean.</span>
                    </p>
                </ParagraphContainer>
            </Card>
        </CardsContainer>
      </Container>
    </>
  );
}

export default Services;