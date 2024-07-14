/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import FooterContainer from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { useFirebaseContext } from "../context/firebase";
import { ROUTES } from "../utils/constants";

const SignUp = () => {

    const navigate = useNavigate();
    const firebase = useFirebaseContext();

    const [fnm, setFnm] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = !fnm || !email || !password;

    const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);

            await response.user?.updateProfile({
                displayName: fnm,
                photoURL: `${Math.floor(Math.random() * 5) + 1}`
            });

            console.log(response.user);

            navigate(ROUTES.Browse);
        } catch(error: any) {
            setError(error.message);
            setEmail('');
            setPassword('');
            setFnm('');
        }
    }

    return <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignUp}>
                    <Form.Input
                        type="text"
                        placeholder="First name"
                        value={fnm}
                        onChange={({target}) => setFnm(target.value)}
                    />
                    <Form.Input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />

                    <Form.Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />

                    <Form.Submit        type="submit"
                    disabled={isInvalid}
                    >Sign Up</Form.Submit>
                </Form.Base>

                <Form.Text>
                    Already a user? <Form.Link to={ROUTES.SignIn}> Sign In Now.</Form.Link>
                </Form.Text>

                <Form.TextSmall>
                This page is protected by Gooogle reCAPTCHAA to ensure you&apos;re a bot.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
    </>

}

export default SignUp;