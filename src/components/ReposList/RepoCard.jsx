import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { BiBook } from "react-icons/bi";
import { GoRepo } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineLayout } from "react-icons/ai";
import { Link } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./ReposList.css";

export default function RepoCard({ item }) {
  return (
    <ErrorBoundary>
        <div className="head">
          <div className="headItem">
            <BiBook style={{ marginRight: ".5rem" }} />
            <h3>Overview</h3>
          </div>
          <div className="headItem">
            <GoRepo style={{ marginRight: ".5rem" }} />
            <h3>
              Repositories
              <span>{profile.public_repos}</span>
            </h3>
          </div>
          <div className="headItem">
            <AiOutlineLayout style={{ marginRight: ".5rem" }} />
            <h3>Projects</h3>
          </div>
          <div className="headItem">
            <FiPackage style={{ marginRight: ".5rem" }} />
            <h3>Packages</h3>
          </div>
          <div className="headItem">
            <IoIosStarOutline style={{ marginRight: ".5rem" }} />
            <h3>
              Stars
              <span>{profile.public_gists}</span>
            </h3>
          </div>
        </div>
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
