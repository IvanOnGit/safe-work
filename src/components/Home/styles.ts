import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
padding: 1rem;
background-color: #001C3C;
display: flex;
align-items: center;
height: 40rem;
justify-content: space-between;

@media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
}
`;

export const TextContainer = styled.div`
    color: white;
    font-family: 'Inter', sans-serif;
    margin-left: 6rem;
    margin-bottom: 7rem;
    h1 {
        font-size: 3rem;
        font-weight: 100;
    }
    p {
        font-size: 1rem;
        word-spacing: 0.2rem;
    }

    @media (max-width: 768px) {
        margin-left: 1rem;
        margin-bottom: 0;
    }
`;

export const VideoContainer = styled.div`
    margin-right: 6rem;
    margin-bottom: 7rem;
    img {
        width: 35rem;
        height: 20rem;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledSection = styled.section`
    height: 40rem;
    background-color: white;
`;