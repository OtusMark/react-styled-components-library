import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import styled, {StyledComponentProps} from "styled-components";
import {ThemeType} from "../../styles/theme";

// тип пропсов обычной кнопки
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type PropsType = DefaultButtonPropsType

export const Button: React.FC<PropsType> = ({...restProps}) => {

    return (
        <StyledButton{...restProps}/>
    );
}

const StyledButton = styled.button<StyledComponentProps<any, ThemeType, any, any>>`
  border: none;
  cursor: pointer;
  background-color: ${({theme}) => theme.color.primary.main};
  color: ${({theme}) => theme.color.white};
  padding: .5rem 1rem;

  &:hover {
    background-color: ${({theme}) => theme.color.primary.light};
  }
`