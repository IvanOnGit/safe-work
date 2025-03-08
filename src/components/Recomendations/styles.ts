import styled from 'styled-components';

export const Container = styled.section`
    height: 40rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;

    h1 {
        font-size: 2rem;
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export const TitleContainer = styled.div`
    margin-bottom: 3rem;
    text-align: left;
    margin-right: 26rem;

    h1 {
        font-size: 1.5rem;
    }
`;

export const RecomendationsContainer = styled.div`
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    padding: 3rem;
    padding-left: 8rem;
    padding-right: 8rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const TextContainer = styled.div`
    font-family: 'Inter', sans-serif;
`;

export const PersonAndLogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PersonContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

export const ProfileImage = styled.img`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
`;

export const NameOcupationAndStars = styled.div`
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        font-weight: 600;
    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 100;
    }
`;

export const Stars = styled.div``;

export const RecomendationsLogo = styled.img``;