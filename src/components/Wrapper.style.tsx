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

  @media (min-width: 1200px) and (max-width: 1448px) {
    width: 60%;
  }

  @media (max-width: 1200px) {
    width: 55%;
  }

  @media (max-width: 964px) {
    width: 0%;
  }
`;

export const WrapperLogin = styled.div`
  height: 100%;
  width: 30%;
  background-color: ${({ theme }) => theme.colors.neutras.smothDark};
  display: flex;
  justify-content: center;
  flex: 1 1 0%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const FormContainer = styled.section`
  margin: 15% 0;
  padding-left: 15%;
  padding-right: 15%;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.neutras.white};

  @media (max-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: 964px) {
    margin: 5% 0;
  }
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
