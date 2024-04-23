"use client";

import { Controller, Control, Path, PathValue } from "react-hook-form";

import styled from "styled-components";

import { inputStyles } from "@/app/shared/style";

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0 auto;
  select {
    ${inputStyles};
    margin: 5px 0;
    cursor: pointer;
  }
`;

const FormDropdown = <T extends {}>({
  label,
  name,
  options,
  control,
}: {
  label: string;
  name: Path<T>;
  options: string[];
  control: Control<T, any>;
}) => {
  return (
    <StyledDropdown>
      <label htmlFor={label}>{label}</label>
      <Controller
        control={control}
        name={name}
        defaultValue={"None" as PathValue<T, Path<T>>}
        render={({ field }) => (
          <select
            {...field}
            id={label}
            onChange={(e) => field.onChange(e.target.value)}
          >
            <option disabled value="None">
              Select amount
            </option>
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        )}
      />
    </StyledDropdown>
  );
};

export default FormDropdown;
