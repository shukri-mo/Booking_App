import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { FormRow } from "../cabins/CreateCabinForm";
import { useForm } from "react-hook-form";
import { useSignup } from "./UseSignup";

// Email regex: /\S+@\S+\.\S+/
const Label = styled.label`
  font-weight: 500;
`;
function SignupForm() {
  const { register, formState, handleSubmit,reset } = useForm();
  const { errors } = formState;
  const { signup,isLoading } = useSignup();
  function onSubmit({ fullName, email, password }) {
    signup({fullName,email,password},{
      onSettled:reset
    });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label>Full name</Label>
        <Input
          type="text"
          id="fullName"
          error={errors.fullName?.message}
          {...register("fullName")}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <Label>Email address</Label>
        <Input
          type="email"
          id="email"
          error={errors.email?.message}
          {...register("email")}
            disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <Label>Password (min 8 characters)</Label>
        <Input
          type="password"
          id="password"
          error={errors.password?.message}
          {...register("password")}
            disabled={isLoading}
        />
      </FormRow>
      <FormRow error={""}>
        <Label>Repeat password</Label>
        <Input
          type="password"
          id="passwordConfirm"
          error={errors.passwordConfirm?.message}
          {...register("passwordConfirm")}
            disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button   disabled={isLoading} >Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
