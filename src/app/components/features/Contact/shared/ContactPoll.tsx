import {
  UseFormRegister,
  UseFormGetValues,
  FieldErrors,
} from "react-hook-form";

import styled from "styled-components";

import Input, { InputType } from "@/app/components/ui/Input";

import { IFormInput } from "../ts/types";

const StyledTitle = styled.div`
  padding: 10px 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    margin: 0;
    text-align: center;
    text-transform: capitalize;
    line-height: 25px;
  }
`;

const ContactPoll = ({
  title,
  name,
  pollArray,
  register,
  getValues,
  errors,
}: {
  title: string;
  name: string;
  pollArray: string[];
  register: UseFormRegister<IFormInput>;
  getValues: UseFormGetValues<IFormInput>;
  errors: FieldErrors<IFormInput>;
}) => {
  return (
    <>
      <StyledTitle>
        <h4>{title}</h4>
      </StyledTitle>
      {pollArray.map((elem: string, i: number) => {
        return (
          <Input
            key={i}
            name={name}
            inputType={InputType.Checkbox}
            label={elem}
            value={elem}
            register={register}
            error={errors[name as keyof IFormInput]?.message}
            rules={{}}
          />
        );
      })}
    </>
  );
};

export default ContactPoll;
