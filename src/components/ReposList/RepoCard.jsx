import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./ReposList.css";

export default function RepoCard({ item , profile}) {
  return (
    <ErrorBoundary>
        
        <div className="card" key={item.id}>
        <div className="repoLink">
            <h5 className="repoName"> {item.name} </h5>
            <div className="repoStatus">
            <p> {item.visibility} </p>
            </div>
        </div>
        <div className="description">
            <p> {item.description} </p>
        </div>
        <div className="row">
            <div className="language">
            <p>{item.language}</p>
            </div>
            <div className={`row ${item.stargazers_count === 0 ? "none" : ""}`}>
            <IoIosStarOutline fill="#8b949e" style={{ marginRight: ".5rem" }} />
            <p>{item.stargazers_count}</p>
            </div>
        </div>
        <Link to="/repository">
            <button className="viewRepo">View Repo</button>
        </Link>
        </div>
    </ErrorBoundary>
  );
}
