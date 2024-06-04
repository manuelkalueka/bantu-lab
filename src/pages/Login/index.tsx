import React from "react";
import {
  Wrapper,
  MainContainer,
  WrapperLogin,
  FormContainer,
} from "../../components/Wrapper.style";
import LoginForm from "../../components/LoginForm";
import { SeparatorElement, Title } from "../../components/styledComponents";

const Login: React.FC = () => {
  return (
    <MainContainer>
      <Wrapper />
      <WrapperLogin>
        <FormContainer>
          <Title>Bantu Lab</Title>
          <Title>Acesse sua Conta</Title>
          <LoginForm />
          <SeparatorElement />
        </FormContainer>
      </WrapperLogin>
    </MainContainer>
  );
};

export default Login;
