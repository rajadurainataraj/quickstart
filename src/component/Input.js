import styled, { ThemeProvider } from "styled-components"

const InputStyle = styled.input`
  padding: 10px;
  margin: 10px 2px;
  width: 30%;
  color: white;
  ::placeholder {
    color: red;
  }
  border-radius: 5px;
`
const Input = ({ type, placeholder }) => {
  return <InputStyle type={type} placeholder={placeholder} />
}
export default Input
