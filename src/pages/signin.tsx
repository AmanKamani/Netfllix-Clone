import React, { FormEvent, useState } from "react";
import { Form } from "../components";
import FooterContainer from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { ROUTES } from "../utils/constants";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState('');

    const isInvalid = !!email || !!password;

    const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                { error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input 
                        placeholder="Email Address"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                    <Form.Input 
                        type="password"
                        autoComplete="off"
                        placeholder="Password"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign In
                    </Form.Submit>
                </Form.Base>

                <Form.Text>
                    New to Netfllix? <Form.Link to={ROUTES.SignUp}>Sign Up Now</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Gooogle reCAPTCHAA to ensure you&apos;re a bot.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
    </>;
}

export default SignIn;