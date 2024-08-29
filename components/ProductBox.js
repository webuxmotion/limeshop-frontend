import { useContext } from 'react';
import styled from "styled-components"
import Button from "./Button";
import CartIcon from "@/icons/CartIcon";
import Link from "next/link";
import { CartContext } from './CartContext';

const ProductWrapper = styled.div`

`;

const WhiteBox = styled(Link)`
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

const Title = styled(Link)`
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
    color: inherit;
    text-decoration: none;
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
    const { addProduct } = useContext(CartContext);
    const productHref = `/product/${product._id}`;

    function addProductToCart() {
        addProduct(product._id);
    }

    return (
        <ProductWrapper>
            <WhiteBox href={productHref}>
                <div>
                    <img src={product.images[0]} />
                </div>
            </WhiteBox>
            <ProductInfo>
                <Title href={productHref}>{product.title}</Title>
                <PriceRow>
                    <Price>${product.price}</Price>
                    <Button 
                        theme="secondary"
                        onClick={addProductToCart}
                    >
                        <CartIcon />
                    </Button>
                </PriceRow>
            </ProductInfo>

        </ProductWrapper>

    )
}