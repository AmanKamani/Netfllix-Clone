import React, { PropsWithChildren } from "react";
import { Container, Inner, SubTitle, Title } from "./styles/feature";

const Feature = ({children}: PropsWithChildren) => {
    return <Container>
        <Inner>
            {children}
        </Inner>
    </Container>
}

Feature.Title = function FeatureTitle({children}: PropsWithChildren) {
    return <Title>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({children}: PropsWithChildren) {
    return <SubTitle>{children}</SubTitle>
}

export default Feature;