import styled from "styled-components";

export const InputFormStyled = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.input.height};
  padding: ${({ theme }) => theme.input.padding[1]};
  font-size: ${({ theme }) => theme.input.font_size};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.main};
    box-shadow: 0 0 7px 2px ${({ theme }) => theme.colors.main};
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
    background-color: ${({ theme }) => theme.colors.main_light};
    cursor: pointer;
  }

  transition: background-color 500ms ease-in-out;
`;
export const LabelFormStyled = styled.label`
  padding-bottom: 0.625rem;
  color: ${({ theme }) => theme.colors.neutras.mediumGray};

  &:not(:first-child) {
    padding-top: 1.5rem;
  }
`;
export const TextErrorStyled = styled.p`
  color: ${({ theme }) => theme.colors.neutras.danger};
  padding-top: 0.625rem;
`;
export const LoginFormStyled = styled.form`
  flex-direction: column;
  display: flex;
  margin-bottom: 30%;
`;

export const ForgetPasswordLink = styled.a`
  color: ${({ theme }) => theme.colors.main};
  padding: 0.625rem 0;
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.main_light};
  }

  transition: color 0.5s ease-in-out;
`;

export const Title = styled.h1`
  font-size: 1.9rem;
  padding-bottom: 2.4rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const SeparatorElement = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.neutras.darkGray};
`;
