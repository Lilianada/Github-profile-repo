import React from "react";
import "./404Page.css";
import ErrorImage from "../../assets/404Illustration.png";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="errorWrapper">
        <img src={ErrorImage} alt="Error Illustration" className="errorImage" />
        <div className="errorBody">
            <h3 className="errorHead">Oops! We can't find the page you're looking for</h3>
            <Link to='/' className="errorButton">Back to home</Link>
        </div>
    </div>
  );
}
