import { useForm, SubmitHandler } from "react-hook-form";
import { AnimatePresence } from "framer-motion";

import Form from "@/app/components/ui/Form";

import ContactFields from "../shared/ContactFields";
import ContactPoll from "../shared/ContactPoll";
import ContactSuccess from "./ContactSuccess";

import useToggle from "@/app/hooks/useToggle";
import useFormMethods from "../hooks/useFormMethods";

import { surveyArray } from "../constant";

import { IFormInput } from "../ts/types";

const ContactMessage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
  } = useForm<IFormInput>({
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: { survey: [] },
  });

  const [isSuccess, toggleSuccess] = useToggle();
  const { handleEmail } = useFormMethods();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    handleEmail(data, errors, reset, toggleSuccess);
  };

  return (
    <>
      <Form
        isSuccess={isSuccess}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      >
        <ContactFields
          getValues={getValues}
          errors={errors}
          register={register}
          clearErrors={clearErrors}
        />
        <ContactPoll
          title="how did you find us"
          name="survey"
          pollArray={surveyArray}
          getValues={getValues}
          errors={errors}
          register={register}
        />
      </Form>
      <AnimatePresence>
        {isSuccess && (
          <ContactSuccess toggleMessage={toggleSuccess}>
            {"Message has been successfully sent"}
          </ContactSuccess>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactMessage;
