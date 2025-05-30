import { useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { UseLogin } from "./UseLogin";
import SpinnerMini from "../../ui/SpinnerMini";
const StyledForm = styled(Form)`
  background-color: var(--color-grey-0);
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  margin: 2rem auto;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.6rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
`;

import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("shukri@dev.com");
  const [password, setPassword] = useState("shukridev@@");
  const { login, isLoading } = UseLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSuccess: () => {
          navigate("/"); // 👈 redirect after successful login
        },
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }


  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormRow>
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <FullWidthButton size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </FullWidthButton>
      </FormRow>
    </StyledForm>
  );
}

export default LoginForm;
