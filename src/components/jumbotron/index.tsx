import React, { PropsWithChildren } from 'react';
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from './styles/jumbotron';

type JumbotronProps = {
    direction?: string
}

const Jumbotron = ({children, direction = 'row'}: PropsWithChildren<JumbotronProps>) => {
    return (
    <Item>
        <Inner direction={direction}>
        {children}
        </Inner>
    </Item>);
}

Jumbotron.Container = ({children}: PropsWithChildren) => {
    return <Container>
        {children}
    </Container>
}

Jumbotron.Pane = ({children}: PropsWithChildren) => {
    return <Pane>
        {children}
    </Pane>
}

Jumbotron.Title = ({children}: PropsWithChildren) => {
    return <Title>
        {children}
    </Title>
}

Jumbotron.SubTitle = ({children}: PropsWithChildren) => {
    return <SubTitle>
        {children}
    </SubTitle>
}

type JumbotronImageProps = {
    src: string,
    alt: string
};
Jumbotron.Image = (props: JumbotronImageProps) => {
    return <Image {...props} />
}

export default Jumbotron;