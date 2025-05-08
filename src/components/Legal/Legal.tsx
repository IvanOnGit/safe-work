import { useEffect } from 'react';
import { Container, InnerText, Navbar } from './styles';
import { ArrowLeftToLine } from 'lucide-react';

function Privacy() {
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleGoBack = () => {
        window.history.back();
      };

  return (
    <Container>
        <Navbar>
        <ArrowLeftToLine onClick={handleGoBack} />
            <h1>Aviso legal oficial</h1>
        </Navbar>
        <InnerText>
            <h2>Cumplimiento de deberes de información</h2>
            <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web
            https://ayudaacosolaboral.com, le informa de lo siguiente: <br />
            • Denominación social: Miguel Pérez Urzay<br />
            • NIF: 05940931P<br />
            • Domicilio: Paseo De La Alameda De Osuna 81. 2d., 28042 - Madrid (Madrid)<br />
            Con los límites establecidos en la ley, https://ayudaacosolaboral.com no asume ninguna responsabilidad derivada de la
            falta de veracidad, integridad, actualización y precisión de los datos o informaciones que se contienen en sus páginas
            de Internet.<br />
            Los contenidos e información no vinculan a https://ayudaacosolaboral.com ni constituyen opiniones, consejos o
            asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido con carácter informativo y
            divulgativo.<br />
            Las páginas de Internet de https://ayudaacosolaboral.com pueden contener enlaces (links) a otras páginas de terceras
            partes que https://ayudaacosolaboral.com no puede controlar. Por lo tanto, https://ayudaacosolaboral.com no puede
            asumir responsabilidades por el contenido que pueda aparecer en páginas de terceros.<br />
            Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este website son propiedad
            exclusiva de https://ayudaacosolaboral.com o sus licenciantes. Cualquier acto de transmisión, distribución, cesión,
            reproducción, almacenamiento o comunicación pública total o parcial, debe contar con el consentimiento expreso de
            https://ayudaacosolaboral.com.<br />
            Asimismo, para acceder a algunos de los servicios que https://ayudaacosolaboral.com ofrece a través del website
            deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo establecido en el Reglamento (UE)
            2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas
            en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos le informamos que,
            mediante la cumplimentación de los presentes formularios, sus datos personales quedarán incorporados y serán
            tratados en los ficheros de Miguel Pérez Urzay con el fin de poderle prestar y ofrecer nuestros servicios así como para
            informarle de las mejoras del sitio Web. Asimismo, le informamos de la posibilidad de que ejerza los derechos de
            acceso, rectificación, cancelación y oposición de sus datos de carácter personal, manera gratuita mediante email a
            mperez.psicologia@gmail.com o en la dirección Paseo De La Alameda De Osuna 81. 2d., 28042 - Madrid (Madrid).
            </p>
        </InnerText>
    </Container>
  );
}

export default Privacy;