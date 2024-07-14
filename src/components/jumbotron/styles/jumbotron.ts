import styled from "styled-components";
import { COMPONENT_MAX_WIDTH, COMPONENT_SEPERATOR_BORDER_BOTTOM } from "../../../utils/style-constants";


export const Item = styled.div`
    display: flex;
    padding: 50px 5%;
    border-bottom: ${COMPONENT_SEPERATOR_BORDER_BOTTOM};
    overflow: hidden;
    color: white;
`;

export const Inner = styled.div<{direction: string}>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    align-items: center;
    justify-content: space-between;
    margin: auto; // auto works with max-width. So that div will be in center
    max-width: ${COMPONENT_MAX_WIDTH};
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}: last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;