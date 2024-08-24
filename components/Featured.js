import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
    background-color: #222;
    color: white;
    padding: 50px 0;
`;

const Title = styled.h1`
    font-size: 2.8rem;
    font-weight: normal;
    margin-bottom: 15px;
`;

const Desc = styled.p`
    color: #aaa;
    margin-bottom: 25px;
    font-size: 1.2rem;
`;

const Buttons = styled.div`
    display: flex;
    gap: 10px;
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

export default function Featured({ product }) {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <div>
                        <Title>{product.title}</Title>
                        <Desc>
                            {product.description}
                        </Desc>
                        <Buttons>
                            <ButtonLink
                                href={`/products/${product._id}`}
                                size="lg"
                            >Read more</ButtonLink>
                            <Button
                                theme="primary"
                                size="lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                </svg>

                                Add to cart
                            </Button>
                        </Buttons>
                    </div>
                    <div>
                        <img
                            src={product?.images.length > 0 ? product?.images[0] : ""}
                        />
                    </div>
                </Wrapper>
            </Center>
        </Bg>
    )
}