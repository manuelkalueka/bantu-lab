import styled from "styled-components";
import LoginBackGroudImage from "../assets/img/man-in-studio.png";

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  background-image: url(${LoginBackGroudImage});
  background-color: ${({ theme }) => theme.colors.main_dark};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const WrapperLogin = styled.div`
  height: 100%;
  width: 30%;
  background-color: ${({ theme }) => theme.colors.neutras.smothDark};
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.section`
  margin: 15% 0;
  max-width: 100%;
  width: 75%;
  color: ${({ theme }) => theme.colors.neutras.white};
`;

export const SignupContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: calc(0.625rem * 2);
`;

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
