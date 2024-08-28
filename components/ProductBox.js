import styled from "styled-components"
import Button from "./Button";
import CartIcon from "@/icons/CartIcon";

const ProductWrapper = styled.div`

`;

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    img {
        max-width: 100%;
        max-height: 150px;
    }
`;

const Title = styled.h2`
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
`;

const ProductInfo = styled.div`
    margin-top: 10px;
`;

const PriceRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

const Price = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
`;

export default function ProductBox({ product }) {

    return (
        <ProductWrapper>
            <WhiteBox>
                <div>
                    <img src={product.images[0]} />
                </div>
            </WhiteBox>
            <ProductInfo>
                <Title>{product.title}</Title>
                <PriceRow>
                    <Price>${product.price}</Price>
                    <Button theme="secondary">
                        <CartIcon />
                    </Button>
                </PriceRow>
            </ProductInfo>

        </ProductWrapper>

    )
}