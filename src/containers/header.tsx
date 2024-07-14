import React, { PropsWithChildren } from "react";
import { Header } from "../components";
import { ROUTES } from "../utils/constants";

export const HeaderContainer = ({children}: PropsWithChildren) => {
    return (
    <Header style={{minHeight: '40rem'}}>
        <Header.NavBar>
            <Header.NavPartition grow={1}>
                <Header.Logo src="/images/netfllix.png" alt="Netfllix" />
            </Header.NavPartition>
            <Header.NavPartition>
                <Header.ButtonLink to={ROUTES.HOME}>Sign In</Header.ButtonLink>
            </Header.NavPartition>
        </Header.NavBar>

        {children}
    </Header>);
}