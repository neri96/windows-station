import { Controller, Control } from "react-hook-form";

import styled from "styled-components";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

import FormDropdown from "@/app/components/ui/FormDropdown";

import { inputStyles } from "@/app/shared/style";

import { IFormInput } from "../ts/types";

const itemQty = ["1-5", "6-10", "11-15", "16-20", "21-25", "26 plus"];

const StyledDatePicker = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0 auto;

  .datePicker {
    ${inputStyles};
    margin: 5px 0;
    cursor: pointer;
  }
`;

const ContactEstDetails = ({
  control,
}: {
  control: Control<IFormInput, any>;
}) => {
  return (
    <>
      <FormDropdown
        label="Approximately how many Windows do you need?"
        name="windowQty"
        control={control}
        options={itemQty}
      />
      <FormDropdown
        label="Approximately how many Doors do you need?"
        name="doorQty"
        control={control}
        options={itemQty}
      />
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <StyledDatePicker>
            <label htmlFor="date">When is your project start date?</label>
            <DatePicker
              id="date"
              className="datePicker"
              placeholderText="Select date"
              autoComplete="off"
              minDate={moment().toDate()}
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          </StyledDatePicker>
        )}
      />
    </>
  );
};

export default ContactEstDetails;
