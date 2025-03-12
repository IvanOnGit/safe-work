import { Container, NameOcupationAndStars, PersonAndLogoContainer, PersonContainer, ProfileImage, RecomendationsContainer, RecomendationsLogo, Stars, TextContainer, TitleContainer } from './styles';

function Recomendations() {
  return (
    <>
      <Container id="recomendations">
        <TitleContainer>
                  <h1>Ellos ya recuperaron su paz. Ahora es tu turno.</h1>
        </TitleContainer>
        <RecomendationsContainer>
        <TextContainer>
            <p>
             Desde que contacté a SafeWork, he recuperado la confianza y la claridad para enfrentar mi <span className="mobile-hide"><br /></span>
             situación. Su orientación profesionaly apoyo constante me han dado las herramientas necesarias <span className="mobile-hide"><br /></span>
             para actuar con seguridad. Ahora, me siento acompañada en cada paso y veo un camino real <span className="mobile-hide"><br /></span>
             hacia una solución.
            </p>
        </TextContainer>
        <PersonAndLogoContainer>
            <PersonContainer>
                <ProfileImage src="/images/ProfilePictureRecomendation.jpg" alt="" />
                <NameOcupationAndStars>
                    <h1>Marta Ramos</h1>
                    <h2>TEAM LEADER | MADRID, ESPAÑA</h2>
                    <Stars>
                        <img src="/images/Star.svg" alt="" />
                        <img src="/images/Star.svg" alt="" />
                        <img src="/images/Star.svg" alt="" />
                        <img src="/images/Star.svg" alt="" />
                        <img src="/images/Star.svg" alt="" />
                    </Stars>
                </NameOcupationAndStars>
            </PersonContainer>
            <RecomendationsLogo src="/images/GoogleLogo.svg" alt="" />
        </PersonAndLogoContainer>
        </RecomendationsContainer>
      </Container>
    </>
  );
}

export default Recomendations;