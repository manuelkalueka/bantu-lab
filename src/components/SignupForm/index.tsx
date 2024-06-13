import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ButtonFormStyled,
  HightlightLink,
  InputFormStyled,
  LabelFormStyled,
  LoginFormStyled,
  Text,
  TextErrorStyled,
} from "../styledComponents";
import { signupService } from "../../services/users";
// import { redirect } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const schema = yup
  .object({
    username: yup.string().required("Preecha seu username"),
    name: yup
      .string()
      .required("Nome é obrigatório")
      .test("fullName", "Insira um nome completo válido", (value: string) => {
        // Verifica se o valor contém pelo menos um espaço em branco
        return /\s/.test(value);
      }),
    email: yup.string().email("Email Inválido").required("Preecha seu Email"),
    password: yup
      .string()
      .min(6, "Insira uma senha com 6 caracteres no mínimo")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        "Senha Inválida (Deve ter letras Maiusculas, Minusculas e Números)"
      )
      .required("Senha é obrigatória"),
    confPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas devem iguais")
      .required("Confirme sua senha"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SignupForm: React.FC = () => {
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
      const response = await signupService(data);
      if (response?.status === 201) {
        MySwal.fire({
          title: "Sucesso!",
          text: "Conta Criada",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        MySwal.fire({
          title: "Erro",
          text: "Verifique seus dados",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      MySwal.fire({
        title: "Erro",
        text: "Erro ao criar conta.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
      <LabelFormStyled htmlFor="name">Nome</LabelFormStyled>
      <InputFormStyled
        {...register("name")}
        placeholder="Seu nome Completo"
        id="name"
        autoComplete="name"
      />
      <TextErrorStyled>{errors.name?.message}</TextErrorStyled>
      <LabelFormStyled htmlFor="username">Username</LabelFormStyled>
      <InputFormStyled
        {...register("username")}
        placeholder="Seu nome de usuário"
        id="username"
        autoComplete="username webauthn"
      />
      <TextErrorStyled>{errors.username?.message}</TextErrorStyled>

      <LabelFormStyled htmlFor="email">Email</LabelFormStyled>
      <InputFormStyled
        {...register("email")}
        placeholder="Seu email preferido"
        id="email"
        autoComplete="email webauthn"
      />
      <TextErrorStyled>{errors.email?.message}</TextErrorStyled>

      <LabelFormStyled htmlFor="password">Senha</LabelFormStyled>
      <InputFormStyled
        {...register("password")}
        placeholder="Sua Senha"
        type="password"
        id="password"
        autoComplete="current-password webauthn"
      />
      <TextErrorStyled>{errors.password?.message}</TextErrorStyled>

      <LabelFormStyled htmlFor="confPassword">Confirmar Senha</LabelFormStyled>
      <InputFormStyled
        {...register("confPassword")}
        placeholder="Redigite Sua Senha"
        type="password"
        id="confPassword"
        autoComplete="current-password webauthn"
      />
      <TextErrorStyled>{errors.confPassword?.message}</TextErrorStyled>
      <Text
        style={{
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        Ao se inscrever, você aceita nossos{" "}
        <HightlightLink href="#" target="_self">
          termos de uso
        </HightlightLink>{" "}
        e a nossa{" "}
        <HightlightLink href="#" target="_self">
          política de privacidade.
        </HightlightLink>
      </Text>

      <ButtonFormStyled type="submit">Submeter</ButtonFormStyled>
    </LoginFormStyled>
  );
};

export default SignupForm;
