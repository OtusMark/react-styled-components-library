import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from "react";
import {InputText} from "./InputText";
import {SvgPen} from "../svg/SvgPen";
import styled, {StyledComponentProps} from "styled-components/macro";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {};

    const onEnterCallback = () => {
        setEditMode(false); // выключить editMode при нажатии Enter

        onEnter && onEnter();
    };
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false); // выключить editMode при нажатии за пределами инпута

        onBlur && onBlur(e);
    };
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true); // включить editMode при двойном клике

        onDoubleClick && onDoubleClick(e);
    };

    return (
        <>
            {editMode
                ? (
                    <EditModeInput
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}

                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    <EditMOdeOff>
                        <StyledSpan
                            onDoubleClick={onDoubleClickCallBack}
                            {...restSpanProps}
                        >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                            {children || restProps.value}
                        </StyledSpan>
                        <StyledSvgPen onClick={onDoubleClickCallBack} className={'StyledSvgPen'}/>
                    </EditMOdeOff>
                )
            }
        </>
    );
}

const EditModeInput = styled(InputText)<StyledComponentProps<any, any, any, any>>`
  //margin: 0;
  padding: 0;
  
  height: 20px;

  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;

  line-height: 0;
`

const EditMOdeOff = styled.div<StyledComponentProps<any, any, any, any>>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 20px;
  
  width: 100%;
  height: 20px;
`

const StyledSpan = styled.span<StyledComponentProps<any, any, any, any>>`
  padding-right: 10px;
  
  &:hover ~ .StyledSvgPen {
    fill: ${({theme}) => theme.color.grey["500"]};
  }
`

const StyledSvgPen = styled(SvgPen)<StyledComponentProps<any, any, any, any>>`
  fill: transparent;
  &:hover {
    fill: ${({theme}) => theme.color.primary.main};
    cursor: pointer;
  }
`

export default SuperEditableSpan;
