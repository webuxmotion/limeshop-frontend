import isEmptyObj from "@/utils/isEmptyObj";
import styled, { css } from "styled-components"

const Button = styled.button`
    border: 0;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 10px 20px;

    ${({ theme }) => {
        if (isEmptyObj(theme)) {
            return css`
                color: black;
                background-color: white;

                &:hover {
                    background-color: #e5e2ff;
                }
            `;
        }
    }}

    ${props => props?.size === "lg" && css`
        font-size: 1.2rem;
        padding: 10px 20px;
    `}

    ${props => props?.theme === "primary" && css`
        background-color: #5542f6;
        font-size: 1.2rem;
        padding: 10px 20px;

        &:hover {
            background-color: #4637c6;
        }
    `}
`;

export default function PrimaryButton({ children, ...rest }) {
    return (
        <Button {...rest}>
            {children}
        </Button>
    )
}