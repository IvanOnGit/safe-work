import React from "react";
import { Line, Step, StepperContainer } from "./styles";

export interface StepProps {
    active: boolean;
    completed: boolean;
}

interface StepperProps {
    currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
    return (
        <StepperContainer>
            {[1, 2, 3, 4].map((step, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <Line completed={step <= currentStep} />}
                    <Step active={step === currentStep} completed={step < currentStep}>
                        {step}
                    </Step>
                </React.Fragment>
            ))}
        </StepperContainer>
    );
};

export default Stepper;
