import React, {useState} from 'react';
import {Button} from "./components/clear/Button/Button";
import {Checkbox} from "./components/clear/Checkbox/Checkbox";
import {InputText} from "./components/clear/InputText/InputText";
import { Card } from './components/layout/Card';
import {Container} from "./components/layout/Container";
import {RadioButtons} from "./components/clear/RadioButtons/RadioButtons";
import styled from "styled-components/macro";
import EditableSpan from "./components/clear/EditableSpan/EditableSpan";
import {Select} from "./components/clear/Select/Select";
import {RangeSlider} from "./components/clear/RangeSlider/RangeSlider";
import { ImageSliderDemo } from './components/clear/ImageSlider/ImageSliderDemo';

function App() {

    // I must organize examples for each component!!!
    const [boolean, setBoolean] = useState(false)
    console.log(boolean)

    const arr = ["One", "Two", "Three"];
    const [value, onChangeOption] = useState(arr[1]);

    const [values, setValues] = useState([0, 100]);
    const changeRangeInputValues = (values: Array<number>) => {
        setValues(values)
    }

    return (
        <StyledContainer>
            <CardsWrapper>
                <StyledCard>
                    <Button>Button</Button>
                </StyledCard>
                <StyledCard>
                    <Checkbox onChange={() => setBoolean(!boolean)} checked={boolean}>Checkbox</Checkbox>
                </StyledCard>
                <StyledCard>
                    <InputText error={'asdf'}/>
                </StyledCard>
                <StyledCard>
                    <RadioButtons options={arr}
                                  value={value}
                                  onChangeOption={onChangeOption}/>
                </StyledCard>
                <StyledCard>
                    <EditableSpan value={'asdfasdf'} error={'asdf'}/>
                </StyledCard>
                <StyledCard>
                    <Select options={arr} value={value} onChangeOption={onChangeOption}/>
                </StyledCard>
                <StyledCard>
                    <RangeSlider values={values} onChangeRange={changeRangeInputValues}/>
                </StyledCard>
                <StyledCard>
                    <ImageSliderDemo/>
                </StyledCard>
            </CardsWrapper>
        </StyledContainer>
    )
}

export default App;

const StyledContainer = styled(Container)`
  margin-left: -30px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StyledCard = styled(Card)`
  margin: 0 0 30px 30px;
`