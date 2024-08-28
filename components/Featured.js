import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "@/icons/CartIcon";

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
                                <CartIcon />

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