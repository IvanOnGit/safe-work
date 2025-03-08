import styled from "styled-components";
import { StepProps } from "./Stepper";

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Step = styled.div<StepProps>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid
    ${(props) => (props.active || props.completed ? "#007bff" : "#ccc")};
  color: ${(props) => (props.active || props.completed ? "#007bff" : "#001C3C")};
  font-weight: bold;
`;

export const Line = styled.div<{ completed?: boolean }>`
  width: 50px;
  height: 2px;
  background-color: ${(props) => (props.completed ? "#007bff" : "#ccc")};
`;