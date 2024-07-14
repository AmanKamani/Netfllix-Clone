import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 400px;
    min-height: 600px;
    width: 100%;
    margin: 1rem auto 2rem auto;
    padding: 3rem 4rem 3rem;
    background-color: rgba(0, 0, 0, 0.75);
    
`;
export const Base = styled.form`
    display: flex;
    flex-direction: column;

    max-width: 400px;
    width: 100%;
`;
export const Title = styled.h1`
    margin-bottom: 2rem;
`;
export const Text = styled.p`
    color: #737373;
    font-size: 1rem;
    font-weight: 500;
`;
export const TextSmall = styled.p`
    margin-top: 0.8rem;
    font-size: 0.9rem;
    line-height: normal;
    color: #8c8c8c;
`;

export const Input = styled.input`
    background: #333;
    border-radius: 0.4rem;
    border: 0;
    color: white;
    height: 3rem;
    line-height: 3rem;
    padding: 0.4rem 1.2rem;
    margin-bottom: 1.2rem;

    &:last-of-type {
        margin-bottom: 1.9rem;
    }
`;

export const Error = styled.p`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 1rem 1.2rem;
`;

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    margin: 1.5rem 0 0.8rem;
    padding: 1rem;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

export const RouterLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;