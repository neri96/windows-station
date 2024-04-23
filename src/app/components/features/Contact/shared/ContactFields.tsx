"use client";

import {
  UseFormGetValues,
  FieldErrors,
  UseFormRegister,
  UseFormClearErrors,
} from "react-hook-form";

import styled from "styled-components";

import Input from "@/app/components/ui/Input";

import { IFormInput } from "../ts/types";

const StyledContactData = styled.div`
  width: 100%;
`;

const ContactFields = ({
  getValues,
  errors,
  register,
  clearErrors,
}: {
  getValues: UseFormGetValues<IFormInput>;
  errors: FieldErrors<IFormInput>;
  register: UseFormRegister<IFormInput>;
  clearErrors: UseFormClearErrors<IFormInput>;
}) => {
  return (
    <StyledContactData>
      <Input
        label="Name"
        name="name"
        error={errors.name?.message}
        register={register}
        clearErrors={clearErrors}
        rules={{
          required: "This field is required",
          minLength: 2,
          maxLength: 100,
        }}
      />
      <Input
        label="Email"
        name="email"
        error={errors.email?.message}
        register={register}
        clearErrors={clearErrors}
        rules={{
          required: "This field is required",
          minLength: 2,
          maxLength: 100,
        }}
      />
      <Input
        label="Phone"
        name="phone"
        error={errors.phone?.message}
        register={register}
        clearErrors={clearErrors}
        rules={{
          required: "This field is required",
          minLength: 2,
          maxLength: 100,
        }}
      />
      <Input
        label="Message"
        name="message"
        isTextarea
        error={errors.message?.message}
        register={register}
        clearErrors={clearErrors}
        rules={{}}
      />
    </StyledContactData>
  );
};

export default ContactFields;
