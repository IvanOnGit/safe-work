import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
padding: 1rem;
background-color: #001C3C;
display: flex;
align-items: center;
height: 30rem;
justify-content: space-between;
`;

export const TextContainer = styled.div`
    color: white;
    font-family: 'Inter', sans-serif;
    margin-left: 6rem;
    h1 {
        font-size: 3rem;
        font-weight: 100;
    }
    p {
        font-size: 1rem;
        word-spacing: 0.2rem;
    }
`;

export const VideoContainer = styled.div`
    margin-right: 6rem;
    img {
        width: 35rem;
        height: 20rem;
    }
`;