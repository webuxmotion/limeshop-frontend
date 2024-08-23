import isEmptyObj from "@/utils/isEmptyObj";
import styled, { css } from "styled-components";

export const buttonStyle = css`
    border: 0;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 10px 20px;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    svg {
        height: 16px;
        margin-right: 5px;
    }

    ${({ theme }) => {
        if (isEmptyObj(theme)) {
            return css`
                color: black;
                background-color: white;

                &:hover {
                    background-color: #e5e2ff;
                }
            `;
        } else if (theme === "primary") {
            return css`
                background-color: #5542f6;
                font-size: 1.2rem;
                padding: 10px 20px;

                &:hover {
                    background-color: #4637c6;
                }
            `
        }
    }}

    ${props => props?.size === "lg" && css`
        font-size: 1.2rem;
        padding: 10px 20px;

        svg {
            height: 20px;
        }
    `}
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

export default function Button({ children, ...rest }) {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}