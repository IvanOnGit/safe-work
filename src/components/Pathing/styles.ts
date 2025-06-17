import { styled } from "styled-components";

import { keyframes } from 'styled-components';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  
  h1 {
    text-align: center;
    color: #001C3C;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    max-width: 800px;
  }
  
  p {
    text-align: center;
    color: black;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    max-width: 700px;

    &.subtitle {
      display: none;
    }
  }

  @media (max-width: 768px) {
    margin-top: 45rem;

    h1 {
      font-size: 1.5rem;
      width: 80%;
    }

    p {
      font-size: 1rem;
      width: 80%;
      text-align: justify;
    }
  }
`;

export const TreeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin-top: 4rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 52px;
    width: 2px;
    background: linear-gradient(180deg, #001C3C, #001C3C);
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: 768px) {
      left: 10%;
    }
  }
`;

export const MainBranch = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  
  &:nth-child(1) {
    justify-content: flex-start;
  }
  
  &:nth-child(2) {
    justify-content: flex-end;
  }
  
  &:nth-child(3) {
    justify-content: flex-start;
  }
`;

export const BranchLine = styled.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, #001C3C, #001C3C);
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  
  ${MainBranch}:nth-child(1) & {
    left: 43%;
    width: calc(50% - 386px);
  }
  
  ${MainBranch}:nth-child(2) & {
    right: 43%;
    width: calc(50% - 387px);
  }
  
  ${MainBranch}:nth-child(3) & {
    left: 43%;
    width: calc(50% - 386px);
  }
  
  ${MainBranch}:nth-child(1) &::after {
    left: 0;
  }
  
  ${MainBranch}:nth-child(2) &::after {
    right: 0;
  }
  
  ${MainBranch}:nth-child(3) &::after {
    left: 0;
  }
`;

export const BranchContent = styled.div`
  width: 80%;
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 3;
  
  ${MainBranch}:nth-child(1) & {
    margin-left: -80px;
    animation: ${fadeInLeft} 0.8s ease 0s forwards;
    width: 45%;

    @media (max-width: 768px) {
      margin-left: 3.5rem;
      width: 100%;
      backdrop-filter: none;
      padding: 0rem;
    }
  }
  
  ${MainBranch}:nth-child(2) & {
    margin-right: -220px;
    animation: ${fadeInRight} 0.8s ease 0.2s forwards;
    width: 60%;
    @media (max-width: 768px) {
      margin-right: 0;
      margin-left: 3.5rem;
      padding: 0rem;
      width: 100%;
      backdrop-filter: none;
    }
  }
  
  ${MainBranch}:nth-child(3) & {
    margin-left: -180px;
    animation: ${fadeInLeft} 0.8s ease 0.4s forwards;
    width: 55%;
    @media (max-width: 768px) {
      margin-left: 3.5rem;
      padding: 0rem;
      width: 100%;
      backdrop-filter: none;
      text-align: justify;
    }

  }
  
  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgb(10, 12, 132, 0.5);

    @media (max-width: 768px) {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const BranchTitle = styled.h3`
  color: #001C3C;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    width: 75%;
    text-align: justify;
  }
`;

export const BranchSubtitle = styled.h4`
  color: black;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const BranchDescription = styled.p`
  color: #ffffff;
  font-size: 0.7rem;
  line-height: 1.6;
  margin: 0;
  text-align: left !important;

  @media (max-width: 768px) {
    text-align: justify !important;
    width: 100%;
  }
`;

export const CTAButton = styled.button`
  background: linear-gradient(135deg, #88123c, #88123c);
  color: #ffffff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin: 2rem auto 0;
  display: block;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #c52138, #c52138);
  }
  
  &:active {
    transform: translateY(0);
  }
`;  