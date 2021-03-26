import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 30px;

  width: 300px;
  height: 300px;
  
  border: 1px solid ${({theme}) => theme.color.black };
`