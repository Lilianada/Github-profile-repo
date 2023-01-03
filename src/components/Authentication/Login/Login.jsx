import React from "react";
import "./Login.css";
import { BsGithub } from "react-icons/bs";

export const Wrapper = styled.section`
    display: grid;
    place-items: center;
    grid-template-columns: 100%;
    grid-template-rows: repeat();
    padding: 2rem;
    height: auto;
    width: 340px;
    margin: 0 auto;
`
export const Head = styled.header`
    text-align: center;

    >p{
        font-weight: 200;
        font-size: 1.25rem;
        color: var(--headTxt-color);
        padding: .75rem 0;
    }
`
export const Body = styled.div`
    display: grid;
    background: var(--headerBg-color);
    padding: 1rem 1.5rem;
    border: 1px solid #242424;
    border-radius: 5px;
    width: 100%;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    color: var(--headTxt-color);
    font-size: 13px;
`
export const Span = styled.span`
    color: var(--blueTxt-color);
    font-size: var(--font-twelve);
    cursor: pointer;
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: .5rem;
`

export const Input = styled.input`
    background: var(--bodyBg-color);
    border: 1px solid #242424;
    border-radius: 3px;
    padding: .25rem .5rem;
    margin-bottom: 1rem;
    color: #F0F6FC;
    font-size: var(--font-twelve);
    font-weight: 300;
    letter-spacing: normal;

    & :hover, :focus{
        outline: var(--blueTxt-color) 1.5px solid;
    }
`

export const Button = styled.button`
    background: var(--greenBg-color);
    font-size: var(--font-twelve);
    font-weight: 600;
    font-family: var(--font);
    padding: .35rem;
    border: 1px solid #249e3b;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    transition: all .3s;
    color: #F0F6FC;
    margin-bottom: .5rem;

    & :hover, :focus{
        background: #249e3b;
    }
`

export const Footer = styled.footer`
    padding: .5rem 2rem;
    border:  1px solid var(--bodyTxt-color);
    border-radius: 5px;
    width: 100%;
    margin-top: 1rem;
`

export const Text = styled.p`
    font-size: var(--font-twelve);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--headTxt-color);

    >span{
        margin-left: 3px;
        
    }
`

export default function Login () {
    return(
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
                    <Flex>
                        <label className="loginLabel">Password</label>
                        <span className="spanText">Forgot password?</span>
                    </Flex>
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
                <p className="text">New Github?<span> Create an account</span>.</p> 
            </footer>
        </section>
    )
}
