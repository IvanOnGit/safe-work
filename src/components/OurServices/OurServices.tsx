import { FileText, DollarSign, User } from 'lucide-react';
import { Container, ServiceCard, IconWrapper, Title, List, TextContainer, MobileContainer } from './styles';

function OurServices() {
    return (
        <>
            <TextContainer>
                <h1>Un acompañamiento integral, adaptado a lo que necesitas</h1>
                <h2>Puedes acceder a cada servicio por separado o a un plan de acción <span className="mobile-hide"><br /></span>  <span className="desktop-hide"><br /></span>completo, adaptado a tu situación y a lo que realmente necesites.</h2>
            </TextContainer>
            <Container>
                <ServiceCard>
                    <IconWrapper>
                        <FileText size={32} color="white" />
                    </IconWrapper>
                    <Title>Asesoramiento legal</Title>
                    <List>
                        <li>Obtén un plan de acción legal claro y adaptado para tu caso, con pasos
                        concretos para afrontar la situación de forma segura.</li>
                        <li>Recibe apoyo legal en cada fase del proceso, desde la activación del protocolo
                        de acoso hasta una eventual reclamación judicial.</li>
                        <li>Conoce como recopilar <br />pruebas y evidencias para <br />proteger tus derechos sin
                        <br />ponerte en riesgo.</li>
                        <li>Actúa con representación legal especializada en vía judicial, poniendo tu caso
                        en manos de abogados con amplia experiencia en procedimientos de acoso.</li>
                    </List>
                </ServiceCard>

                <ServiceCard>
                    <IconWrapper>
                        <DollarSign size={32} color="white" />
                    </IconWrapper>
                    <Title>Infórme pericial psicológico</Title>
                    <List>
                        <li>Objetiva el daño psicológico que estás sufriendo con una prueba pericial que
                        demuestra el impacto del acoso en tu salud mental.</li>
                        <li>Demuestra la existencia del acoso a través de indicadores psicológicos
                        medibles <br />y objetivos.</li>
                        <li>Fundamenta tu derecho a reclamar una indemnización por daño moral, dados
                        los daños psicológicos que el acoso te ha causado.</li>
                        <li>Protege tus derechos y refuerza tu posición legal ante la empresa en el
                        procedimiento interno y/o judicial.</li>
                    </List>
                </ServiceCard>

                <ServiceCard>
                    <IconWrapper>
                        <User size={32} color="white" />
                    </IconWrapper>
                    <Title>Terápia especializada</Title>
                    <List>
                        <li>Supera la ansiedad y el daño psicológico que el acoso te está causando a ti y a
                        tu entorno más cercano.</li>
                        <li>Encuentra las herramientas necesarias para poner fin a la situación y recupera
                        la sensación de control sobre tu vida.</li>
                        <li>Recupera tu bienestar y autoestima y vuelve a sentirte bien contigo <br />mismo/a y
                        con los <br /> que te rodean.</li>
                        <li>Siéntete acompañado/a emocionalmente a lo largo de todo el proceso,
                        recuerda que no estás solo/a en esto.</li>
                    </List>
                </ServiceCard>
            </Container>
            <MobileContainer>
            <ServiceCard>
                    <IconWrapper>
                        <FileText size={32} color="white" />
                    </IconWrapper>
                    <Title>Asesoramiento legal</Title>
                    <List>
                        <li>Obtén un plan de acción legal claro y adaptado para tu caso, con pasos
                        concretos para afrontar la situación de forma segura.</li>
                        <li>Recibe apoyo legal en cada fase del proceso, desde la activación del protocolo
                        de acoso hasta una eventual reclamación judicial.</li>
                        <li>Conoce como recopilar pruebas y evidencias para proteger tus derechos sin
                        ponerte en riesgo.</li>
                        <li>Actúa con representación legal especializada en vía judicial, poniendo tu caso
                        en manos de abogados con amplia experiencia en procedimientos de acoso.</li>
                    </List>
                </ServiceCard>

                <ServiceCard>
                    <IconWrapper>
                        <DollarSign size={32} color="white" />
                    </IconWrapper>
                    <Title>Informe pericial <br />psicológico</Title>
                    <List>
                        <li>Objetiva el daño psicológico que estás sufriendo con una prueba pericial que
                        demuestra el impacto del acoso en tu salud mental.</li>
                        <li>Demuestra la existencia del acoso a través de indicadores psicológicos
                        medibles y objetivos.</li>
                        <li>Fundamenta tu derecho a reclamar una indemnización por daño moral, dados
                        los daños psicológicos que el acoso te ha causado.</li>
                        <li>Protege tus derechos y refuerza tu posición legal ante la empresa en el
                        procedimiento interno y/o judicial.</li>
                    </List>
                </ServiceCard>

                <ServiceCard>
                    <IconWrapper>
                        <User size={32} color="white" />
                    </IconWrapper>
                    <Title>Terapia especializada</Title>
                    <List>
                        <li>Supera la ansiedad y el daño psicológico que el acoso te está causando a ti y a
                        tu entorno más cercano.</li>
                        <li>Encuentra las herramientas necesarias para poner fin a la situación y recupera
                        la sensación de control sobre tu vida.</li>
                        <li>Recupera tu bienestar y autoestima y vuelve a sentirte bien contigo mismo/a y
                        con los que te rodean.</li>
                        <li>Siéntete acompañado/a emocionalmente a lo largo de todo el proceso,
                        recuerda que no estás solo/a en esto.</li>
                    </List>
                </ServiceCard>
            </MobileContainer>
        </>
  );
}

export default OurServices;