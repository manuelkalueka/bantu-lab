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

const schema = yup
  .object({
    username: yup.string().required("Preecha seu username"),
    password: yup.string().required("Preecha sua senha"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
      <LabelFormStyled htmlFor="username">Username</LabelFormStyled>
      <InputFormStyled
        {...register("username")}
        placeholder="Seu nome de usuário"
        id="username"
      />
      <TextErrorStyled>{errors.username?.message}</TextErrorStyled>
      <LabelFormStyled htmlFor="password">Senha</LabelFormStyled>
      <InputFormStyled
        {...register("password")}
        placeholder="Sua Senha"
        type="password"
        id="password"
      />
      <TextErrorStyled>{errors.password?.message}</TextErrorStyled>
      <ForgetPasswordLink>Esqueci minha senha</ForgetPasswordLink>
      <ButtonFormStyled type="submit">Enviar</ButtonFormStyled>
    </LoginFormStyled>
  );
};

export default LoginForm;
