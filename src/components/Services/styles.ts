import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    gap: 2rem;

    h1 {
        font-size: 2rem;
        margin: 0;
        padding: 0;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 1.5rem;
        }
    }

    h2 {
        font-weight: bold;
        text-align: center;
        width: 50rem;
        font-size: 1.3rem;

        @media (max-width: 768px) {
            display: none;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 25rem;
    border: 1px solid #001C3C;
    border-radius: 1rem;
    padding: 1rem;
    text-align: left;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    gap: 2rem;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;

    h2 {
        font-size: 1rem;
        margin: 0;
        padding: 0;
        transition: color 0.3s ease;
    }

    p {
        font-size: 0.8rem;
        margin: 0;
        padding: 0;
        width: 17rem;
        transition: color 0.3s ease;

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }
    }

    svg {
        transition: color 0.3s ease;
    }

    &.law {
        border: #4a2140 solid 3px;

        h2 {
            color: #4a2140;
        }

        svg {
            color: #4a2140;
            height: 3rem;
            width: 3rem;
        }

        p {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            
            svg {
                height: 2rem;
                width: 1.5rem;
                flex-shrink: 0;
                margin-top: 0.1rem;
            }
        }

        /* Hover para desktop */
        @media (min-width: 769px) {
            &:hover {
                background-color: #4a2140;
                
                h2 {
                    color: white !important;
                }

                p {
                    color: white !important;
                }

                svg {
                    color: white !important;
                }
            }
        }

        /* Active para mobile (mantener presionado) */
        @media (max-width: 768px) {
            &:active {
                background-color: #4a2140;
                
                h2 {
                    color: white !important;
                }

                p {
                    color: white !important;
                }

                svg {
                    color: white !important;
                }
            }
        }
    }

    &.paper {
        border: #88213c solid 3px;

        h2 {
            color: #88213c;
        }

        svg {
            color: #88213c;
            height: 3rem;
            width: 3rem;
        }

        p {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            
            svg {
                height: 2rem;
                width: 1.5rem;
                flex-shrink: 0;
                margin-top: 0.1rem;
            }
        }

        /* Hover para desktop */
        @media (min-width: 769px) {
            &:hover {
                background-color: #88213c;
                
                h2 {
                    color: white !important;
                }

                p {
                    color: white !important;
                }

                svg {
                    color: white !important;
                }
            }
        }

        /* Active para mobile (mantener presionado) */
        @media (max-width: 768px) {
            &:active {
                background-color: #88213c;
                
                h2 {
                    color: white !important;
                }

                p {
                    color: white !important;
                }

                svg {
                    color: white !important;
                }
            }
        }
    }

    &.brain {
        border: #c52138 solid 3px;

        h2 {
            color: #c52138;
        }

        svg {
            color: #c52138;
            height: 3rem;
            width: 3rem;
        }

        p {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            
            svg {
                height: 2rem;
                width: 1.5rem;
                flex-shrink: 0;
                margin-top: 0.1rem;
            }
        }

        /* Hover para desktop */
        @media (min-width: 769px) {
            &:hover {
                background-color: #c52138;
                
                h2 {
                    color: white !important;
                }

                p {
                    color: white !important;
                }

                svg {
                    color: white !important;
                }
            }
        }

        /* Active para mobile (mantener presionado) */
        @media (max-width: 768px) {
            &:active {
                background-color: #c52138;
                
                h2 {
                    color: white !important;
                }

                p {
                    color: white !important;
                }

                svg {
                    color: white !important;
                }
            }
        }
    }
`;

export const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 15rem;
    gap: 1rem;

    p {
        height: 5rem;
        text-align: justify;
        font-size: 0.9rem;
        font-weight: 500;
    }
`;