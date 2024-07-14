import React, { PropsWithChildren } from "react";
import { Button, Container, Input, Text } from "./styles/opt-form";

const OptForm = ({children}: PropsWithChildren) => {
    return (<Container>
        {children}
    </Container>)
}

OptForm.Input = function OptFormInput({...otherProps}: PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>) {
    return <Input {...otherProps} />;
}

OptForm.Button = function OptFormButton({children, ...otherProps}: PropsWithChildren) {
    return <Button {...otherProps}>
        {children}
        <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
}

OptForm.Text = function OptFormText({children}: PropsWithChildren) {
    return <Text>{children}</Text>
}


export default OptForm;