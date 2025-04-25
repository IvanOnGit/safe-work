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
    height: 37rem;
}
@media (min-width: 768px) and (max-width: 1024px) {   
    height: 35rem;
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
        font-size: 1.1rem;
        word-spacing: 0.25rem;
        text-align: justify;
    }

    @media (max-width: 768px) {
        margin-left: 1rem;
        margin-right: 3rem;
        margin-bottom: 0;
        padding: 0;

        p {
            text-align: justify;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {   
        h1 {
            font-size: 2.4rem;
        }
        p {
            font-size: 0.8rem;
        }
    }
`;

export const VideoContainer = styled.div`
    margin-right: 6rem;
    margin-bottom: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 28rem;
        height: 28rem;
        object-fit: contain;
        object-position: center;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }

    @media (max-width: 768px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {   
        img {
            width: 25rem;
            height: 15rem;
        }
    }

    p {
        font-family: 'Inter', sans-serif;
        color: white;
        font-size: 1rem;
        text-align: center;
        width: 30rem;
    }
`;

export const StyledSection = styled.section`
    height: 40rem;
    background-color: white;
`;