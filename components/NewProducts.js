import styled from "styled-components"
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding: 30px 0;
`;

export default function NewProducts({ products }) {

    return (
        <Center>
            <ProductsGrid>
                {products?.length > 0 && products.map(product => (
                    <ProductBox
                        key={product._id}
                        product={product}
                    />
                ))}
            </ProductsGrid>
        </Center>
    );
}