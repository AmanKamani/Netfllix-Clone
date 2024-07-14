import React from "react";
import { Accordian, OptForm } from "../components";
import faqs from "../fixtures/faqs.json";

export const FaqsContainer = () => {
    return (<Accordian>
        <Accordian.Title>Frequently Asked Questions</Accordian.Title>
        {
            faqs.map((faq) => (
                <Accordian.Item key={faq.id}>
                    <Accordian.Header>{faq.header}</Accordian.Header>
                    <Accordian.Body>{faq.body}</Accordian.Body>
                </Accordian.Item>
            ))
        }

        <OptForm>
            <OptForm.Input type='email' placeholder='Email address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership
            </OptForm.Text>
        </OptForm>

    </Accordian>);
}