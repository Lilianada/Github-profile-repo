import styled from "styled-components"
import Header from "../Header/NavBar/NavBar"

const Wrapper = styled.main`

`
const Head = styled.header`
    
`
const List = styled.ul`
    display: flex;
    justify-content: center;
`
const Items = styled.li`
    
`
const Body = styled.section`
    display: grid;
    grid-template-columns: 40% 60%;
    place-items: center;
`
const Left = styled.aside`

`
const Right = styled.area`

`

export default function RepositoryPage () {
    return(
        <Wrapper>
            <Header/> 
            <Head>

            </Head>
            <Body>
                <Left>

                </Left>
                <Right>

                </Right>
            </Body>
        </Wrapper>
    )
}