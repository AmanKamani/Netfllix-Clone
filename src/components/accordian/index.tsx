/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { Body, Container, Header, Inner, Item, Title } from "./styles/accordian";

const Accordian = ({children}: PropsWithChildren) => {
    return (<Container>
        <Inner>
            {children}
        </Inner>
    </Container>);
}

type ToggleContextType = {
    toggleVisible: boolean,
    setToggleVisible: Dispatch<SetStateAction<boolean>>;
}

const AccordianToggleContext = createContext<ToggleContextType | undefined>(undefined);

Accordian.Title = ({children}: PropsWithChildren) => {
    return (<Title>
        {children}
    </Title>);
}

Accordian.Item = ({children}: PropsWithChildren) => {
    const [toggleVisible, setToggleVisible] = useState(false);


    return (<AccordianToggleContext.Provider 
        value={{toggleVisible, setToggleVisible}}>
        <Item>
            {children}
        </Item>
    </AccordianToggleContext.Provider>);
}

Accordian.Header = ({children}: PropsWithChildren) => {

    const { toggleVisible, setToggleVisible } = useContext(AccordianToggleContext)!;

    return <Header onClick={() => setToggleVisible(prevToggle => !prevToggle)}>
        {children}
        {
            toggleVisible
            ? <img src="/images/icons/close-slim.png" alt="close" />
            : <img src="/images/icons/add.png" alt="open" />
        }
    </Header>;
}

Accordian.Body = ({children}: PropsWithChildren) => {
    const { toggleVisible } = useContext(AccordianToggleContext)!;

    return (
        toggleVisible 
        ? <Body>{children}</Body>
        : null);
}

export default Accordian;