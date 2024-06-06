import {
  Wrapper,
  MainContainer,
  WrapperLogin,
  FormContainer,
  SignupContainer,
  SignupWrapper,
} from "../../components/Wrapper.style";
import LoginForm from "../../components/LoginForm";
import {
  LogoBantuLab,
  LogoBantuLabContainer,
  SeparatorElement,
  SignupLink,
  Subtitle,
  Text,
  TextSignup,
} from "../../components/styledComponents";
import BantuLogo from "../../assets/img/logo-vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Theme } from "../../styles/Theme";

const Login: React.FC = () => {
  return (
    <MainContainer>
      <Wrapper />
      <WrapperLogin>
        <FormContainer>
          <LogoBantuLabContainer>
            <LogoBantuLab src={BantuLogo} alt="Logo da Bantu Lab" />
            <Text>BANTU LAB</Text>
          </LogoBantuLabContainer>
          <Subtitle>Acesse sua Conta</Subtitle>
          <LoginForm />
          <SeparatorElement />
          <SignupLink href="#">
            <SignupWrapper>
              <FontAwesomeIcon
                icon={faUserPlus}
                color={Theme.colors.main}
                fontSize={20}
              />
              <SignupContainer>
                <Text>Não tem uma conta?</Text>
                <TextSignup>Se inscreva gratuitamente</TextSignup>
              </SignupContainer>
            </SignupWrapper>
            <FontAwesomeIcon
              icon={faAngleRight}
              color={Theme.colors.neutras.mediumGray}
              fontSize={10}
              fontWeight={100}
            />
          </SignupLink>
        </FormContainer>
      </WrapperLogin>
    </MainContainer>
  );
};

export default Login;
