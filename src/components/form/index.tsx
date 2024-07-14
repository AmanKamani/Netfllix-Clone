import React, { ButtonHTMLAttributes, FormHTMLAttributes, InputHTMLAttributes, PropsWithChildren } from "react";
import { LinkProps } from "react-router-dom";
import { Base, Container, Error, Input, RouterLink, Submit, Text, TextSmall, Title } from "./styles/form";

const Form = ({children}: PropsWithChildren) => {
    return <Container>
        {children}
    </Container>;
}

Form.Base = function FormBase({children, ...otherProps}: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) {
    return <Base {...otherProps}>
        {children}
    </Base>
};


Form.Title = function FormTitle({children}: PropsWithChildren) {
    return <Title>
        {children}
    </Title>;
}
Form.Text = function FormText({children}: PropsWithChildren) {
    return <Text>
        {children}
    </Text>;
}
Form.TextSmall = function FormTextSmall({children}: PropsWithChildren) {
    return <TextSmall>
        {children}
    </TextSmall>;
}

Form.Input = function FormInput({ ...otherProps}: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>) {
    return <Input {...otherProps} />;
}

Form.Submit = function FormSubmit({ children, ...otherProps}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
    return <Submit {...otherProps}>
        {children}
    </Submit>;
}

Form.Error = function FormError({children}: PropsWithChildren) {
    return <Error>
        {children}
    </Error>;
}

Form.Link = function FormLink({...otherProps}: PropsWithChildren<LinkProps>) {
    return <RouterLink {...otherProps} />
}

export default Form;