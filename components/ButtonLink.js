import Link from "next/link";
import styled from "styled-components";
import { buttonStyle } from "./Button";

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

export default function ButtonLink(props) {
    return (
        <StyledLink {...props} />
    )
}