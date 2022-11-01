import {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "../Header/NavBar/NavBar";
import axios from "axios";

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
    //     Link: <https://api.github.com/user/repos?page=3&per_page=100>; rel="next",
    //   <https://api.github.com/user/repos?page=50&per_page=100>; rel="last"
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    
    // const octokit = new Octokit({
        //     auth: 'YOUR-TOKEN'
        // })
        
        // await octokit.request('GET /users/lilianada/repos', {
            //     username: 'LILIANADA'
            // })
            
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = () => {
        const url = `https://api.github.com/users/lilianada/repos`;
        console.log(url)
        axios.get(url).then((response) => {
        setData(response.data.results);
        console.log(response.data.results)
        setLoading(true);
        }).catch((err) => {
        setError(err);
        setLoading(true);
        }).finally(() => {
        setLoading(false);
        })
    }

    useEffect (() => {
        fetchData()
    }, [])

    const nextPage = () => {
        setPage(page => page + 1);
        fetchData();
    }

    const prevPage = () => {
        setPage(page => page - 1);
        fetchData();
    }
    
    return(
        <Wrapper>
            <Header/> 

            <Head>
                <p>Repositories</p>
            </Head>
            {
                loading ? (<p>loading...</p>) : (
                    data.map((item) => {
                <Body>
                    <Left>
                            
                    </Left>
                    <Right>

                    </Right>
                </Body>
}) )

            }
        </Wrapper>
    )
}