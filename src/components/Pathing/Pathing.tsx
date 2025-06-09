import { Container, TreeContainer, MainBranch, BranchLine, BranchContent, BranchTitle, BranchSubtitle, BranchDescription, CTAButton } from './styles';

function Pathing() {
  return (
    <Container>
      <h1>¿Cómo te ayudamos a salir de una situación de acoso laboral?</h1>
      <p>Si estás atravesando una situación de acoso laboral, conflicto con tu empresa o
      sientes que tu entorno de trabajo está afectando tu salud mental, este es el recorrido
      que seguimos contigo.</p>
      <p>Te acompañamos paso a paso para que entiendas tus opciones, evalúes la viabilidad
      legal y pericial de tu caso, y tomes decisiones informadas con respaldo profesional.</p>
      
      <TreeContainer>
        <MainBranch>
          <BranchLine />
          <BranchContent>
            <BranchTitle>Consulta inicial gratuita</BranchTitle>
            <BranchSubtitle>Duración: 15 minutos</BranchSubtitle>
            <BranchDescription>
              Un primer encuentro breve y sin compromiso para analizar de forma preliminar tu
              situación, identificar posibles indicios de acoso laboral y resolver cualquier duda sobre
              nuestros servicios.
            </BranchDescription>
          </BranchContent>
        </MainBranch>

        <MainBranch>
          <BranchLine />
          <BranchContent >
            <BranchTitle>Diagnóstico integral legal y psicológico: 175 € + IVA</BranchTitle>
            <BranchSubtitle></BranchSubtitle>
            <BranchDescription>
              Evaluación jurídica y psicológica especializada para orientar la viabilidad de tu caso en base a criterios técnicos, que incluye:
                 <li>Reunión con abogado experto en acoso laboral.</li>
                 <li>Valoración psicológica con perito especializado en acoso laboral.</li>
                 <li>Aplicación de pruebas validadas para objetivar el acoso.</li>
                 <li>Informe técnico con conclusiones legales y psicológicas.</li>
                 <li>Plan de acción personalizado con recomendaciones.</li>
            </BranchDescription>
          </BranchContent>
        </MainBranch>   

        <MainBranch>
          <BranchLine />
          <BranchContent>
            <BranchTitle>Acompañamiento integral en todas las fases del proceso</BranchTitle>
            <BranchDescription>
              Te acompañamos profesionalmente en todas las acciones que se consideren
              necesarias, con el respaldo técnico, legal y psicológico de un equipo totalmente
              especializado en acoso laboral.
            </BranchDescription>
          </BranchContent>
        </MainBranch>

        <CTAButton onClick={() => window.open("https://calendly.com/safeworkconsultagratuita/30min")}>
          ¿COMENZAMOS?
        </CTAButton>
      </TreeContainer>
    </Container>
  );
}

export default Pathing;