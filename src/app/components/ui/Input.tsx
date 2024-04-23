"use client";

import { UseFormRegister, UseFormClearErrors } from "react-hook-form";

import styled from "styled-components";

import { inputStyles, inputWrapStyles } from "@/app/shared/style";

export enum InputType {
  Text = "text",
  Checkbox = "checkbox",
}

const StyledInput = styled.div<{ $isCheckbox: boolean }>`
  ${inputWrapStyles};

  input,
  textarea {
    ${({ $isCheckbox }) => !$isCheckbox && `width: 100%`};
    ${inputStyles};
  }
  input {
    height: 35px;
  }
  textarea {
    height: 60px;
  }
  input[type="checkbox"] {
    position: relative;
    height: 25px;
    width: 25px;
    background-color: #666;
    appearance: none;
    &:checked {
      background-color: #fff;
      margin-right: 5px;
      &::before {
        border-color: green;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: calc(50% - 2px);
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 5px;
      height: 13px;
      border: 4px solid transparent;
      border-left: none;
      border-top: none;
    }
  }
`;

const StyledInputError = styled.div`
  color: red;
  margin-bottom: 5px;
`;

const Input = <T extends {}>({
  name,
  value,
  label,
  inputType,
  error,
  register,
  rules,
  clearErrors,
  isTextarea = false,
  handleClick,
}: {
  name: any;
  value?: string;
  label: string;
  error: string | undefined;
  register: UseFormRegister<T>;
  clearErrors?: UseFormClearErrors<T>;
  rules:
    | {
        required: string;
        minLength: number;
        maxLength: number;
      }
    | {};
  inputType?: InputType;
  isTextarea?: boolean;
  handleClick?: () => void;
}) => {
  const Component = isTextarea ? "textarea" : "input";

  const fieldComponent = () => {
    return (
      <>
        {error ? <StyledInputError>{error}</StyledInputError> : null}
        <Component
          value={value}
          type={inputType}
          {...(register && register(name, rules))}
          onClick={handleClick}
          onBlur={() => clearErrors && clearErrors(name)}
          placeholder={label}
        />
      </>
    );
  };

  return (
    <StyledInput $isCheckbox={inputType === InputType.Checkbox}>
      {inputType === InputType.Checkbox ? (
        <label>
          {fieldComponent()}
          {label}
        </label>
      ) : (
        <>{fieldComponent()}</>
      )}
    </StyledInput>
  );
};

export default Input;
