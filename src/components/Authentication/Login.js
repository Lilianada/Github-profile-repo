import React, { useState } from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

const Wrapper = styled.section`
    display: grid;
    place-items: center;
    grid-template-columns: 100%;
    grid-template-rows: repeat();
    padding: 2rem;
    height: auto;
    width: 340px;
    margin: 0 auto;
`
const Head = styled.header`
    text-align: center;

    >p{
        font-weight: 200;
        font-size: 1.25rem;
        color: var(--headTxt-color);
        padding: .75rem 0;
    }
`
const Body = styled.div`
    display: grid;
    background: var(--headerBg-color);
    padding: 1rem 1.5rem;
    border: 1px solid #242424;
    border-radius: 5px;
    width: 100%;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    color: var(--headTxt-color);
    font-size: 13px;
`
const Span = styled.span`
    color: var(--blueTxt-color);
    font-size: var(--font-twelve);
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: .5rem;
`

const Input = styled.input`
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

const Button = styled.button`
    background: var(--greenBg-color);
    font-size: var(--font-twelve);
    font-weight: 600;
    font-family: var(--font);
    padding: .35rem;
    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    transition: all .3s;
    color: #F0F6FC;
    margin-bottom: .5rem;
`

const Footer = styled.footer`
    padding: .5rem 2rem;
    border:  1px solid var(--bodyTxt-color);
    border-radius: 5px;
    width: 100%;
    margin-top: 1rem;
`

const Text = styled.p`
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
        <Wrapper>
            <Head>
                <BsGithub size={48} fill='#F0F6FC' />
                <p>Sign in to Github</p>
            </Head>
            <Body>
                <Form>
                   <Flex>
                        <Label>Username or email address</Label>
                   </Flex>
                    <Input
                        type='username'
                        name="username"
                        required
                    />
                    <Flex>
                        <Label>Password</Label>
                        <Span>Forgot password?</Span>
                    </Flex>
                    <Input
                        type='password'
                        name="password"
                        required
                    />
                </Form>
                <Button type="submit">Sign In</Button>
            </Body>
            
            <Footer>
                <Text>New Github?<Span> Create an account</Span>.</Text> 
            </Footer>
        </Wrapper>
    )
}

