import styled, { ThemeProvider } from "styled-components"
import { TestButton } from "./TestButton"
import Input from "./Input"

// const ModifiedButton = styled(TestButton)`
//   background-color: gray;
//   margin-top: 10px;
//   padding: 10px;
// `
// ModifiedButton.defaultProps = {
//   theme: {
//     main: "white",
//   },
// }

const theme2 = {
  main: "black",
}
const theme = {
  main: "white",
  sub: "orange",
}
const Home = () => {
  const handleClick = () => {
    alert("test click")
  }
  const handleClick2 = () => {
    alert("test click22")
  }
  return (
    <div>
      <div>Reusable Components</div>
      <ThemeProvider theme={theme2}>
        <TestButton onClick={() => handleClick()}>Click me</TestButton>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <TestButton onClick={() => handleClick2()}>Press me</TestButton>
      </ThemeProvider>
      <div>
        <Input type="text" placeholder="Enter Your Name" />
        <Input type="password" placeholder="Enter Your Password" />
      </div>
    </div>
  )
}
export default Home
