import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

function ErrorPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <h1>Ups, esta página no existe</h1>
            <button onClick={handleGoBack}>Volver atrás</button>
        </Container>
    );
}

export default ErrorPage;