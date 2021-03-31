import styled from "styled-components/macro";

export const Card = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 300px;
  
  padding: 30px;
  height: 300px;
  
  border: 1px solid ${({theme}) => theme.color.grey["100"] };
  box-shadow: ${({theme}) => theme.shadow["1"]};
  border-radius: 10px;
`