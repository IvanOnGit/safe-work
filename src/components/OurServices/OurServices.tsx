import { FileText, DollarSign, User } from 'lucide-react';
import { Container, ServiceCard, IconWrapper, Title, List, TextContainer, MobileContainer } from './styles';

function OurServices() {
    return (
        <>
            <TextContainer>
                <h1>Analisamos tu caso para saber cuál de nuestros <span className="mobile-hide"><br /></span> servicios <span className="desktop-hide"><br /></span>se adapta mejor a tu situación</h1>
            </TextContainer>
            <Container>
                <ServiceCard>
                    <IconWrapper>
                        <FileText size={32} color="white" />
                    </IconWrapper>
                    <Title>Generar informe <br />policial</Title>
                    <List>
                        <li>Recopilación de evidencia y testimonios</li>
                        <li>Elaboración de reportes oficiales</li>
                        <li>Asesoría para presentar denuncias</li>
                        <li>Seguimiento del caso con las autoridades</li>
                    </List>
                </ServiceCard>

                <ServiceCard>
                    <IconWrapper>
                        <DollarSign size={32} color="white" />
                    </IconWrapper>
                    <Title>Asesoramiento para <br />indemnización</Title>
                    <List>
                        <li>Análisis de daños y <br />perjuicios</li>
                        <li>Estrategias para reclamar <br />compensaciones</li>
                        <li>Negociación con <br />aseguradoras</li>
                        <li>Preparación de <br />documentación legal</li>
                    </List>
                </ServiceCard>

                <ServiceCard>
                    <IconWrapper>
                        <User size={32} color="white" />
                    </IconWrapper>
                    <Title>Psicoterapia <br />profesional</Title>
                    <List>
                        <li>Sesiones de apoyo <br />emocional</li>
                        <li>Terapias especializadas <br />en traumas</li>
                        <li>Técnicas para la gestión <br />del estrés</li>
                        <li>Planes personalizados <br />de recuperación</li>
                    </List>
                </ServiceCard>
            </Container>
            <MobileContainer>
            <ServiceCard>
                    <IconWrapper>
                        <FileText size={32} color="white" />
                    </IconWrapper>
                    <Title>Generar informe <br />policial</Title>
                    <List>
                        <li>Recopilación de evidencia y testimonios</li>
                        <li>Elaboración de reportes oficiales</li>
                        <li>Asesoría para presentar denuncias</li>
                        <li>Seguimiento del caso con las autoridades</li>
                    </List>
                </ServiceCard>

                <ServiceCard>
                    <IconWrapper>
                        <DollarSign size={32} color="white" />
                    </IconWrapper>
                    <Title>Asesoramiento para <br />indemnización</Title>
                    <List>
                        <li>Análisis de daños y <br />perjuicios</li>
                        <li>Estrategias para reclamar <br />compensaciones</li>
                        <li>Negociación con <br />aseguradoras</li>
                        <li>Preparación de <br />documentación legal</li>
                    </List>
                </ServiceCard>

                <ServiceCard>
                    <IconWrapper>
                        <User size={32} color="white" />
                    </IconWrapper>
                    <Title>Psicoterapia <br />profesional</Title>
                    <List>
                        <li>Sesiones de apoyo <br />emocional</li>
                        <li>Terapias especializadas <br />en traumas</li>
                        <li>Técnicas para la gestión <br />del estrés</li>
                        <li>Planes personalizados <br />de recuperación</li>
                    </List>
                </ServiceCard>
            </MobileContainer>
        </>
  );
}

export default OurServices;