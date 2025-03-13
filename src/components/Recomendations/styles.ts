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

    @media (max-width: 768px) {
        height: 50rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin-left: 5rem;
        margin-right: 5rem;
    }
`;

export const TitleContainer = styled.div`
    margin-bottom: 3rem;
    text-align: left;
    margin-right: 26rem;

    h1 {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        margin-top: 3rem;
        margin-right: 1rem;
        margin-left: 1rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
       width: 100%;
       margin-right: 0;
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

    @media (max-width: 768px) {
        padding: 1rem;
        margin-right: 1rem;
        margin-left: 1rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding-left: 5rem;
        padding-right: 5rem;
    }
`;

export const TextContainer = styled.div`
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        .mobile-hide {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        white-space: nowrap;
    }
`;

export const PersonAndLogoContainer = styled.div`
    display: flex;
    justify-content: space-between;

    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const PersonContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
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

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Stars = styled.div``;

export const RecomendationsLogo = styled.img``;