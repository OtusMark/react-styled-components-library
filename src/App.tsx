import React from 'react';
import {Button} from "./components/Button/Button";
import {Card} from './components/layout/Card';
import {Container} from "./components/layout/Container";
import styled from "styled-components/macro";
import {ImageSliderDemo} from './components/ImageSlider/ImageSliderDemo';
import {CheckboxDemo} from "./components/Checkbox/checkboxDemo";
import {InputTextDemo} from "./components/InputText/InputTextDemo";
import {EditableSpanDemo} from "./components/EditableSpan/EditableSpanDemo";
import {RadioButtonsDemo} from './components/RadioButtons/RadioButtonsDemo';
import {SelectDemo} from './components/Select/SelectDemo';
import {RangeSliderDemo} from "./components/RangeSlider/RangeSliderDemo";
import {PaginationDemo} from "./components/Pagination/PaginationDemo";
import {FilterDemo} from "./components/Filter/FilterDemo";
import {InputFile} from "./components/InputFile/InputFile";
import {Avatar} from "./components/Avatar/Avatar";

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

                <StyledCard>
                    <FilterDemo/>
                </StyledCard>

                <StyledCard>
                    <PaginationDemo/>
                </StyledCard>

                <StyledCard>
                    <Avatar src='https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg'/>
                </StyledCard>

                <StyledCard>
                    <InputFile/>
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