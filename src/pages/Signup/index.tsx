import {
  Wrapper,
  MainContainer,
  WrapperLogin,
  FormContainer,
  SignupContainer,
  SignupWrapper,
} from "../../components/Wrapper.style";
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
import { faAngleRight, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { Theme } from "../../styles/Theme";
import SignupForm from "../../components/SignupForm";

const Signup: React.FC = () => {
  return (
    <MainContainer>
      <Wrapper />
      <WrapperLogin>
        <FormContainer>
          <LogoBantuLabContainer>
            <LogoBantuLab src={BantuLogo} alt="Logo da Bantu Lab" />
            <Text>BANTU LAB</Text>
          </LogoBantuLabContainer>
          <Subtitle>Inscreva-se Gratuitamente</Subtitle>
          <SignupForm />
          <SeparatorElement />
          <SignupLink href="/login">
            <SignupWrapper>
              <FontAwesomeIcon
                icon={faSignIn}
                color={Theme.colors.main}
                fontSize={20}
              />
              <SignupContainer>
                <Text>Já possue uma conta?</Text>
                <TextSignup>Entre na Plataforma</TextSignup>
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

export default Signup;
