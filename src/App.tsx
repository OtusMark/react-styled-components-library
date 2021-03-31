import React from 'react';
import {Button} from "./components/clear/Button/Button";
import {Card} from './components/layout/Card';
import {Container} from "./components/layout/Container";
import styled from "styled-components/macro";
import {ImageSliderDemo} from './components/clear/ImageSlider/ImageSliderDemo';
import {CheckboxDemo} from "./components/clear/Checkbox/checkboxDemo";
import {InputTextDemo} from "./components/clear/InputText/InputTextDemo";
import {EditableSpanDemo} from "./components/clear/EditableSpan/EditableSpanDemo";
import {RadioButtonsDemo} from './components/clear/RadioButtons/RadioButtonsDemo';
import {SelectDemo} from './components/clear/Select/SelectDemo';
import {RangeSliderDemo} from "./components/clear/RangeSlider/RangeSliderDemo";

function App() {

    return (
        <StyledContainer>
            <CardsWrapper>

                <StyledCard>
                    <Button>Button</Button>
                </StyledCard>

                <StyledCard>
                    <CheckboxDemo/>
                </StyledCard>

                <StyledCard>
                    <InputTextDemo/>
                </StyledCard>

                <StyledCard>
                    <EditableSpanDemo/>
                </StyledCard>

                <StyledCard>
                    <RadioButtonsDemo/>
                </StyledCard>

                <StyledCard>
                    <SelectDemo/>
                </StyledCard>

                <StyledCard>
                    <RangeSliderDemo/>
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