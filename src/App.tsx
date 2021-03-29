import React, {useState} from 'react';
import {Button} from "./components/clear/Button";
import {Checkbox} from "./components/clear/Checkbox";
import {InputText} from "./components/clear/InputText";
import { Card } from './components/layout/Card';
import {Container} from "./components/layout/Container";
import {RadioButtons} from "./components/clear/RadioButtons";
import styled from "styled-components/macro";
import EditableSpan from "./components/clear/EditableSpan";
import {Select} from "./components/clear/Select";
import {RangeSlider} from "./components/clear/RangeSlider";

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
        <Container>
            <CardsWrapper>
                <Card >
                    <Button>Button</Button>
                </Card>
                <Card>
                    <Checkbox onChange={() => setBoolean(!boolean)} checked={boolean}>Checkbox</Checkbox>
                </Card>
                <Card>
                    <InputText error={'asdf'}/>
                </Card>
                <Card>
                    <RadioButtons options={arr}
                                  value={value}
                                  onChangeOption={onChangeOption}/>
                </Card>
                <Card>
                    <EditableSpan value={'asdfasdf'} error={'asdf'}/>
                </Card>
                <Card>
                    <Select options={arr} value={value} onChangeOption={onChangeOption}/>
                </Card>
                <Card>
                    <RangeSlider values={values} onChangeRange={changeRangeInputValues}/>
                </Card>
            </CardsWrapper>
        </Container>
    )
}

export default App;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`