import React from "react";
import "./Login.css";
import { BsGithub } from "react-icons/bs";
import Header from "../Header/NavBar";
import { Link } from "react-router-dom";

export default function Login () {
    return(
        <main className="mainWrapper">
            <Header/>
            <section className="loginWrapper">
            <header className="head">
                <BsGithub size={48} fill='#F0F6FC' />
                <p>Login to Github</p>
            </header>
            <div className="formWrap">
                <form className="loginForm">
                   <div className="flexItem">
                        <label className="loginLabel">Username or email address</label>
                   </div>
                    <input
                        type='username'
                        name="username"
                        className="inputField"
                        required
                    />
                    <div className="flexItem">
                        <label className="loginLabel">Password</label>
                        <span className="spanText">Forgot password?</span>
                    </div>
                    <input
                        type='password'
                        name="password"
                        className="inputField"
                        required
                    />
                </form>
                <button type="submit" className="signIn">Login </button>
            </div>
            
            <footer className="footer">
                <p className="text">New to Github?<Link to="/signup"> Create an account</Link>.</p> 
            </footer>
        </section>
        </main>
    )
}

