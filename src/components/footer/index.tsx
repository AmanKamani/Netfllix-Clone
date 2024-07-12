import React, { PropsWithChildren } from "react";
import { Break, Column, Container, Link, Row, Text, Title } from "./styles/footer";

const Footer = ({children}: PropsWithChildren) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

Footer.Row = ({children, ...otherProps}: PropsWithChildren) => {
    return (<Row {...otherProps}>
        {children}
    </Row>);
}

Footer.Column = ({children, ...otherProps}: PropsWithChildren) => {
    return (<Column {...otherProps}>
        {children}
    </Column>);
}

Footer.Link = ({children, ...otherProps}: PropsWithChildren<any>) => {
    return (<Link {...otherProps}>
        {children}
    </Link>);
}

Footer.Title = ({children, ...otherProps}: PropsWithChildren) => {
    return (<Title {...otherProps}>
        {children}
    </Title>);
}

Footer.Text = ({children, ...otherProps}: PropsWithChildren) => {
    return (<Text {...otherProps}>
        {children}
    </Text>);
}

Footer.Break = ({children, ...otherProps}: PropsWithChildren) => {
    return (<Break {...otherProps}>
        {children}
    </Break>);
}

export default Footer;
