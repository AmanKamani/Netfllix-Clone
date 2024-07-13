import React from "react";
import { Accordian } from "../components";
import faqs from "../fixtures/faqs.json";

const AccoridanContainer = () => {
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
    </Accordian>);
}

export default AccoridanContainer;