import styled from "styled-components"

const ProductWrapper = styled.div`

`;

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 150px;
    }
`;

export default function ProductBox({ product }) {

    return (
        <ProductWrapper>
            <WhiteBox>
                <div>
                    <img src={product.images[0]} />
                </div>
            </WhiteBox>
            {product.title}
        </ProductWrapper>

    )
}