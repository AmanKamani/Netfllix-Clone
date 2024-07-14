import React from 'react';
import { OptForm } from '../components';
import Feature from '../components/feature';
import { FaqsContainer } from '../containers/faqs';
import FooterContainer from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';

const Home =  () => {
    return (
    <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>
                    Unlimited movies, TV shows and more
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel anytime.
                </Feature.SubTitle>
                <OptForm>
                    <OptForm.Input type='email' placeholder='Email address' />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership
                    </OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
    </>)
}

export default Home;