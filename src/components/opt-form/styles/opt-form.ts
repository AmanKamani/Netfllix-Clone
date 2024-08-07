import styled from "styled-components";

const INPUT_HEIGHT = '60px';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    // height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 1px solid white;
    padding: 10px;
    height: ${INPUT_HEIGHT};
    box-sizing: border-box;
    background-color: transparent;
    color: white;
    font-size: 1rem;

    &::placeholder {
        color: grey;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: ${INPUT_HEIGHT};
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;

    &:hover {
        background: #f40612;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }

    @media (max-width: 1000px) {
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
`;


export const Text = styled.p`
    font-size: 19.2px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;