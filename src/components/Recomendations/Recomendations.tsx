import { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Container, TitleContainer, RecomendationsContainer, TextContainer, 
  PersonAndLogoContainer, PersonContainer, ProfileImage, NameOcupationAndStars, 
  Stars, RecomendationsLogo, CarouselControls 
} from './styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Recomendations() {
  const testimonials = useMemo(() => [
    {
      text: "Tengo 43 años y en mi vida había tenido ningún problema en mi desarrollo profesional, al contrario, hasta que un nuevo responsable empezó a hacerme la vida imposible. Empecé con ataques de ansiedad y al cabo de un tiempo tuve que coger una baja médica. Me dolía el estómago todo el rato y no había ninguna causa médica. No sabía que hacer. Conocí este servicio y me ayudaron a empezar a ver la luz. Al final interpusimos demanda contra la empresa y aportamos un informe pericial. Ahora estoy en otro trabajo, porque conseguí la extinción indemnizada de mi contrato.",
      name: "ALEJANDRO",
      rating: 5,
      profileImage: "/images/placeholder.svg",
      companyLogo: "/images/GoogleLogo.svg"
    },
    {
      text: "Trabajaba en una gran empresa, que todo el mundo conoce. Nunca pensé que podían tratarme así, pero el calvario que sufrí fue inhumano. Me degradaron profesionalmente para forzarme a que me fuera voluntariamente, sin indemnización, claro. Gracias a un buen asesoramiento legal y y psicológico pude conseguir la adopción de medidas cautelares, para no reincorporarme al trabajo y, finalmente, acabar con el acoso.",
      name: "ANA",
      rating: 5,
      profileImage: "/images/placeholder.svg",
      companyLogo: "/images/GoogleLogo.svg"
    },
    {
      text: "Soy funcionario y, tras vivir esta situación, me di cuenta de que este problema es mucho más común de lo que pensaba. Para mí fue importante sentirme escuchado desde el principio y sentir que quien me atendía estaba especializado en este tema. Lo recomiendo.",
      name: "RAFAEL",
      rating: 5,
      profileImage: "/images/placeholder.svg",
      companyLogo: "/images/GoogleLogo.svg"
    },
    {
      text: "Mi jefe me maltrataba psicológicamente y cogí pánico a ir al trabajo. Me hicieron un informe pericial y con el pude demostrar que sufría ansiedad y síntomas postraumáticos asociados a la oficina. Me ayudó a buscar una solución interna con la empresa y a entender mejor lo que me pasaba.",
      name: "SANTIAGO",
      rating: 5,
      profileImage: "/images/placeholder.svg",
      companyLogo: "/images/GoogleLogo.svg"
    },
    {
      text: "Estaba viviendo una situación de acoso en mi antiguo trabajo en Inglaterra y creí que me estaba volviendo loca, que todo era culpa mía y que estaba exagerando. El psicólogo (Miguel) me ayudó a gestionar la situación y mis emociones. He conseguido recuperarme.",
      name: "INMACULADA",
      rating: 5,
      profileImage: "/images/placeholder.svg",
      companyLogo: "/images/GoogleLogo.svg"
    },

  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Container id="recomendations">
      <TitleContainer>
        <h1>Historias que demuestran que poner fin al acoso es posible</h1>
      </TitleContainer>
      <RecomendationsContainer>
        <TextContainer>
          <p>{currentTestimonial.text}</p>
        </TextContainer>
        <PersonAndLogoContainer>
          <PersonContainer>
            <ProfileImage src={currentTestimonial.profileImage} alt={`Foto de ${currentTestimonial.name}`} />
            <NameOcupationAndStars>
              <h1>{currentTestimonial.name}</h1>
              <Stars>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <img key={i} src="/images/Star.svg" alt="estrella" />
                ))}
              </Stars>
            </NameOcupationAndStars>
          </PersonContainer>
          <RecomendationsLogo src={currentTestimonial.companyLogo} alt="Logo de la empresa" />
        </PersonAndLogoContainer>
        <CarouselControls>
          <button onClick={prevTestimonial} aria-label="Anterior testimonio">
            <ChevronLeft />
          </button>
          <button onClick={nextTestimonial} aria-label="Siguiente testimonio">
            <ChevronRight />
          </button>
        </CarouselControls>
      </RecomendationsContainer>
    </Container>
  );
}

export default Recomendations;