import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import styled from "styled-components"
const Styledlayout=styled.div`
display:grid;
grid-template-columns:26rem 1fr;
grid-template-rows:auto 1fr;
height:100vh;

`
const Main=styled.main`
background-color:var(--color-grey-50);
padding:4rem 4.8rem 6.4rem;
overflow:scroll;
`
const Container=styled.div`
max-width:120rem;
margin:0 auto;
display:flex;
flex-direction:column;
gap:2.3rem;

`
function AppLayout() {

  return (
    <Styledlayout>
    <Header/>
    <Sidebar/>
    <Main>
    <Container>
      <Outlet/>
    </Container>
    

    </Main>
    </Styledlayout>
  )
}

export default AppLayout
