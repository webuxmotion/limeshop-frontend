import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div`
    background-color: #222;
    color: white;
    padding: 50px 0;
`;

const Title = styled.h1`
    font-weight: normal;
    margin-bottom: 15px;
`;

const Desc = styled.p`
    color: #aaa;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    img {
        max-width: 100%;
    }

    & > div:first-child {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
    }
`;



export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <div>
                        <Title>Pro anywhere</Title>
                        <Desc>Description some text here</Desc>
                        <Button
                            size="lg"
                        >Read more</Button>
                        <Button
                            theme="primary"
                            size="lg"
                        >Add to cart</Button>
                    </div>
                    <div>
                        <img
                            src="https://honestising.org/images-honest-ad/descriptive-1.jpg" 
                        />
                    </div>
                </Wrapper>
            </Center>
        </Bg>
    )
}