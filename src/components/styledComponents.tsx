import styled from "styled-components";

export const InputFormStyled = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.input.height};
  padding: ${({ theme }) => theme.input.padding[1]};
  font-size: ${({ theme }) => theme.input.font_size};
  border: 1px solid ${({ theme }) => theme.colors.neutras.mediumGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  background-color: ${({ theme }) => theme.colors.neutras.black};
  color: ${({ theme }) => theme.colors.neutras.white};
  &:focus {
    border-color: ${({ theme }) => theme.colors.main};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutras.gray};
    font-weight: 200;
    font-family: ${({ theme }) => theme.fonts.main};
  }
`;

export const ButtonFormStyled = styled.button`
  height: ${({ theme }) => theme.input.height};
  padding: ${({ theme }) => theme.input.padding[1]} 32px;
  font-size: ${({ theme }) => theme.input.font_size};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 100%;
  color: ${({ theme }) => theme.colors.neutras.white};
  background-color: ${({ theme }) => theme.colors.main};
  font-weight: bold;

  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }
  transition: filter 500ms ease-in-out;
`;

export const LabelFormStyled = styled.label`
  padding-bottom: 0.625rem;
  color: ${({ theme }) => theme.colors.neutras.gray};

  &:not(:first-child) {
    padding-top: 1.5rem;
  }
`;

export const Text = styled.p`
  color: inherit;
`;

export const TextErrorStyled = styled(Text)`
  color: ${({ theme }) => theme.colors.neutras.danger};
  padding-top: 0.625rem;
`;
export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.main};
`;

export const ForgetPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors.main};
  padding: 0.625rem 0;
  margin-bottom: 1.5rem;
  cursor: pointer;
  width: 55%;
  &:hover {
    color: ${({ theme }) => theme.colors.main_light};
  }

  transition: color 0.5s ease-in-out;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2.4rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const Subtitle = styled.h2`
  font-size: 1.9rem;
  padding-bottom: 2.4rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const SeparatorElement = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.neutras.darkGray};
`;

export const LogoBantuLabContainer = styled(Title)`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.fantasy};
  font-weight: 400;
  font-style: normal;
  font-size: 2.5rem;
`;
export const LogoBantuLab = styled.img`
  max-width: 100%;
  width: 2.5rem;
  height: 2.5rem;
`;

export const SignupLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5% 0;
  padding: 4% 6%;
  color: ${({ theme }) => theme.colors.neutras.mediumGray};
  background-color: ${({ theme }) => theme.colors.neutras.dark};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: bold;
  /* border: 1px solid ${({ theme }) => theme.colors.neutras.mediumGray}; */

  &:hover {
    filter: brightness(1.1);
  }
  transition: filter 500ms ease-in-out;

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const HightlightLink = styled(Link)`
  color: ${({ theme }) => theme.colors.main};
  &:hover {
    color: ${({ theme }) => theme.colors.main_light};
  }
  transition: color 500ms ease-in-out;
`;
export const TextSignup = styled(Text)`
  color: ${({ theme }) => theme.colors.main};
  margin-top: 0.625rem;
`;
