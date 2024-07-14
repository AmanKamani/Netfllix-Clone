/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import FooterContainer from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { useFirebaseContext } from "../context/firebase";
import { ROUTES } from "../utils/constants";

const SignIn = () => {
    const firebase = useFirebaseContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = !email || !password;

    const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await firebase.auth()
            .signInWithEmailAndPassword(email,  password);
            console.log(response.user);
            
            navigate(ROUTES.Browse);
        } catch(error: any) {
            setError(error!.message);
            setEmail('');
            setPassword('');
            console.log(error);
        } 
    }



    return <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                { error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn} method="POST">
                    
                    <Form.Input
                        type="email"
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