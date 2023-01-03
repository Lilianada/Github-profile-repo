import React from "react";
import "./Login.css";
import { BsGithub } from "react-icons/bs";
import Header from "../Header/NavBar";
import { Link } from "react-router-dom";

export default function Signup () {
    return(
        <main className="mainWrapper">
            <Header/>
            <section className="wrapper">
            <header className="head">
                <BsGithub size={48} fill='#F0F6FC' />
                <p>Sign in to Github</p>
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
                <button type="submit" className="signIn">Sign In</button>
            </div>
            
            <footer className="footer">
                <p className="text">Already have an account?<Link to="/login"> Login</Link>.</p> 
            </footer>
        </section>
        </main>
    )
}

