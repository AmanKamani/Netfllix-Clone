import styled from "styled-components";
import { COMPONENT_MAX_WIDTH, COMPONENT_SEPERATOR_BORDER_BOTTOM } from "../../../utils/style-constants";

const BACKGROUND_COLOR = '#303030';

export const Container = styled.div`
    border-bottom: ${COMPONENT_SEPERATOR_BORDER_BOTTOM};
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${COMPONENT_MAX_WIDTH};
    margin: auto;
    padding: 70px 45px;
`

export const Title = styled.h1`
    margin-top: 0;
    color: white;
    text-align: center;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: ${BACKGROUND_COLOR};
    padding: 0.8em 1.2em;

    cursor: pointer;
    user-select: none;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;
export const Body = styled.div`

    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    
    background: ${BACKGROUND_COLOR};
    
    padding: 0.8em 1.2em;
    white-space: pre-wrap;

    user-select: none;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;