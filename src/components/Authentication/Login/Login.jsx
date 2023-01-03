import React from "react";
import { 
    Wrapper,
    Head,
    Body,
    Form,
    Flex,
    Input,
    Label,
    Span,
    Button,
    Footer,
    Text
} from "./LoginStyles";
import { BsGithub } from "react-icons/bs";


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

