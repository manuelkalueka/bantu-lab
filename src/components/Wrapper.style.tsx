import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.main_dark};
`;

export const WrapperLogin = styled(Wrapper)`
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
  margin: 15% 0;
  width: 75%;
  color: ${({ theme }) => theme.colors.neutras.white};
`;
