import React from "react";
import styled from "styled-components";


const Button = (props) => {
  return (
    <Buttons onClick={props.onClick} style={{marginRight:props.marginRight}}>{props.children}</Buttons>
  )
};

export default Button;

const Buttons = styled.button`
  padding: 18px;
  font-weight: 600;
  color: aliceblue;
  background-color: #4a026b;
  border: none;
  border-radius: 10px;
  &:hover{
    background-color: #72159e;
  }
`




