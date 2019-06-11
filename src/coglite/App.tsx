
import styled, {createGlobalStyle} from 'styled-components'
import normalize from 'styled-normalize'
//import {hot} from 'react-hot-loader/root'

const GlobalStyles = createGlobalStyle`
${normalize}
* {
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
  background-color: #000;
}
`

const Container = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: #fdee59;
border: 10px solid #5186ec;
`

const AppBase = () => (
<>
  <GlobalStyles />
  <Container>
    <header children='Rescripts' />
    <a
      children={`check out the docs`}
      href='https://github.com/rescripts/rescripts'
    />
  </Container>
</>
)

//export const App = hot(AppBase)
export const App = AppBase