import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ButtonFormStyled,
  ForgetPasswordLink,
  InputFormStyled,
  LabelFormStyled,
  LoginFormStyled,
  TextErrorStyled,
} from "../../components/styledComponents";
import { loginService } from "../../services/users";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const schema = yup
  .object({
    username: yup.string().required("Preecha seu username"),
    password: yup.string().required("Preecha sua senha"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const LoginForm: React.FC = () => {
  const MySwal = withReactContent(Swal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    try {
      const response = await loginService(data);
      if (response?.status === 200) {
        MySwal.fire({
          title: "Sucesso!",
          text: "Seja Bem Vindo",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        MySwal.fire({
          title: "Erro",
          text: "Verifique os dados de acesso",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      MySwal.fire({
        title: "Erro",
        text: "Erro ao entrar na conta.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
      <LabelFormStyled htmlFor="username">Username</LabelFormStyled>
      <InputFormStyled
        {...register("username")}
        placeholder="Seu nome de usuário"
        id="username"
        autoComplete="username webauthn"
      />
      <TextErrorStyled>{errors.username?.message}</TextErrorStyled>
      <LabelFormStyled htmlFor="password">Senha</LabelFormStyled>
      <InputFormStyled
        {...register("password")}
        placeholder="Sua Senha"
        type="password"
        id="password"
        autoComplete="current-password webauthn"
      />
      <TextErrorStyled>{errors.password?.message}</TextErrorStyled>
      <ForgetPasswordLink href="/forget-password" target="_self">
        Esqueci minha senha
      </ForgetPasswordLink>
      <ButtonFormStyled type="submit">Entrar</ButtonFormStyled>
    </LoginFormStyled>
  );
};

export default LoginForm;
