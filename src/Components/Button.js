import styled, {css} from "styled-components";

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid black;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.15s;
    
    &:hover {
        background: transparent;
        color: green;
    }
    
    ${props => 
    props.$primary &&
    css`
        background: green;
        color: white;
    `};
`

export default Button;