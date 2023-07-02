import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background-color: ${(props) => props.theme.sub};
  border-radius: 10px;
  width: 31%;
  padding: 10px;
  margin: 10px 2px;
  color: ${(props) => props.theme.main};
`
export const TestButton = ({ children, className, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  )
}
