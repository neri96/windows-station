"use client";

import { useState, ReactNode, Children, forwardRef, useEffect } from "react";

import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

import styled from "styled-components";

import Button, { BtnType } from "./Button";

const StyledForm = styled.form`
  padding: 20px 0;
  overflow: hidden;
  box-sizing: border-box;
`;

const StyledWizard = styled.div<{
  $currentStep: number;
  $wizardWidth: number;
}>`
  display: flex;
  transition: 300ms ease-in-out;
  ${({ $wizardWidth }) => `width: ${$wizardWidth * 100}%`};
  ${({ $currentStep, $wizardWidth }) => {
    const distance = (100 / $wizardWidth) * $currentStep;

    return `transform: translateX(-${distance}%)`;
  }};
`;

const StyledWizardElem = styled.div`
  width: 100%;
`;

const StyledWizardBottom = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin: 0 5px;
  }
`;

const Form = <T extends {}>({
  isSuccess,
  onSubmit,
  handleSubmit,
  children,
}: {
  isSuccess: boolean;
  onSubmit: SubmitHandler<T>;
  handleSubmit: UseFormHandleSubmit<T, undefined>;
  children: ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const content = Children.toArray(children);

  useEffect(() => {
    if (isSuccess) setCurrentStep(0);
  }, [isSuccess]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledWizard $currentStep={currentStep} $wizardWidth={content.length}>
        {Children.toArray(children).map((component, index) => (
          <StyledWizardElem key={index}>{component}</StyledWizardElem>
        ))}
      </StyledWizard>
      <StyledWizardBottom>
        <Button
          hidden={currentStep === 0}
          onClick={() => setCurrentStep((prevState) => prevState - 1)}
        >
          Prev
        </Button>
        <Button
          hidden={currentStep === content.length - 1}
          onClick={handleSubmit(() =>
            setCurrentStep((prevState) => prevState + 1)
          )}
        >
          Next
        </Button>
        <Button
          hidden={currentStep < content.length - 1}
          btnType={BtnType.Submit}
        >
          Submit
        </Button>
      </StyledWizardBottom>
    </StyledForm>
  );
};

export default Form;
