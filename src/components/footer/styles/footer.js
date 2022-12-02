import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding: 80px 60px;
    background: black;
`
export const Wrapper = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 40px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap : 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled(NavLink)`
    color : #fff;
    margin-bottom: 20px;
    font-size: 18px;
    cursor: pointer; 
    text-decoration: none;

    &:hover {
        color: skyblue;
        transition: 0.3s ease-in-out;
        transform: scale(1.1);
        text-decoration: none;
    }
`
export const Title = styled.div`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`