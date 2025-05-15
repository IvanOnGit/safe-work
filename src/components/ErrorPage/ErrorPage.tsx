import { useNavigate } from 'react-router-dom';
import { Container, TextContainer } from './styles';

function ErrorPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <div>
                <img src="/images/OversightWorker.svg" alt="" />
            </div>
            <TextContainer>
                <h1>404</h1>
                <h2>Ups, esta página no existe.</h2>
                <button onClick={handleGoBack}>Volver atrás</button>
            </TextContainer>
        </Container>
    );
}

export default ErrorPage;