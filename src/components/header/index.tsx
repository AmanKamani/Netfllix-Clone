import React, { PropsWithChildren } from "react";
import { LinkProps } from "react-router-dom";
import { ButtonLink, Container, Inner, Logo, Nav, NavPartition, NavPartitionStyledProps } from "./styles/header";

const Header = ({ children, ...otherProps }: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
    return <Container {...otherProps}>
        <Inner>
            {children}
        </Inner>
    </Container>
}

Header.NavBar = function HeaderNav({children}: PropsWithChildren) {
    return <Nav>
        {children};
    </Nav>
}


type NavPartitionProps = NavPartitionStyledProps;
Header.NavPartition = function HeaderNavItem({children, ...otherProps}: PropsWithChildren<NavPartitionProps>) {
    return (<NavPartition {...otherProps}>{children}</NavPartition>)
}

Header.Logo = function HeaderLogo({...otherProps}: PropsWithChildren<React.ImgHTMLAttributes<HTMLImageElement>>) {
    return <Logo {...otherProps} />
}

Header.ButtonLink = function NavButtonLink({children, ...otherProps}: PropsWithChildren<LinkProps>) {
    
    return <ButtonLink {...otherProps}>{children}</ButtonLink>
}

export default Header;