import React, {useState} from 'react';
import {Button} from "./components/clear/Button";
import {Checkbox} from "./components/clear/Checkbox";
import {InputText} from "./components/clear/InputText";
import { Card } from './components/layout/Card';
import {Container} from "./components/layout/Container";
import styled from "styled-components";
import {RadioButtons} from "./components/clear/RadioButtons";

function App() {

    // I must organize examples for each component!!!
    const [boolean, setBoolean] = useState(false)
    console.log(boolean)

    const arr = ["x", "y", "z"];
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <Container>
            <CardsWrapper>
                <Card>
                    <Button>Button</Button>
                </Card>
                <Card>
                    <Checkbox onChange={() => setBoolean(!boolean)} checked={boolean}>Checkbox</Checkbox>
                </Card>
                <Card>
                    <InputText/>
                </Card>
                <Card>
                    <RadioButtons options={arr}
                                  value={value}
                                  onChangeOption={onChangeOption}/>
                </Card>
            </CardsWrapper>
        </Container>
    )
}

export default App;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`