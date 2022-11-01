import React, {useEffect, useState} from "react";
import './RepoPage.css';
import Header from "../Header/NavBar/NavBar";
import axios from "axios";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


export default function RepositoryPage () {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = () => {
        const url = `https://api.github.com/users/lilianada/repos?page=1&per_page=10`;
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data)
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
        <main className="wrapper">
            {/* <Header/>  */}
            <div className="head">
                <p>Repositories</p>
            </div>
            <ErrorBoundary>
                {
                    loading ? (<p>loading...</p>) : (
                        data.map((item) => {
                            return (
                                <div className="body" key={item.id}>
                                <p> {item.name} </p>
                                <p>
                                    {item.html_url}
                                </p>
                            </div >
                        )
                    }) 
                    )
                }
            </ErrorBoundary>
        </main>
    )
}