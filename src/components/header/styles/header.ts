import { Link } from "react-router-dom";
import styled from "styled-components";
import { COMPONENT_MAX_WIDTH, COMPONENT_SEPERATOR_BORDER_BOTTOM } from "../../../utils/style-constants";

type ContainerProps = {
    backgroundImage?: string
}

export type NavPartitionStyledProps = {
    grow?: number
}

export const Container = styled.div<ContainerProps>`
    background-image: linear-gradient(135deg, #212121 0%, rgba(0, 0, 0, 0.6) 10%), url(${(props) => props.backgroundImage || '../images/misc/home-bg.jpg'});

    background-position-x: left;
    background-position-y: top;
    background-size: cover;
    background-repeat: no-repeat;

    border-bottom: ${COMPONENT_SEPERATOR_BORDER_BOTTOM};
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${COMPONENT_MAX_WIDTH};
    margin: auto;
    padding: 1em 0.5em;
`;

export const Logo = styled.img`
    width: 8rem;
    height: auto;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const SignIn = styled.div``;

export const Nav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 1150px) {
        padding: 0 50px 0 50px;

    }
`;

export const NavPartition = styled.div<NavPartitionStyledProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: ${({grow}) => grow || 0};
    overflow: hidden;

`;

export const ButtonLink = styled(Link)`
    display: block;
    background-color: #e50914;
    width: fit-content;
    height: fit-content;
    text-align: center;
    color: white;
    border: 0;
    font-size: 0.9rem;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`;


