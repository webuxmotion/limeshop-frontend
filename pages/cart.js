import { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import axios from "axios";
import getIdsWithCount from "@/utils/getIdsWithCount";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 40px;
    margin-top: 40px;
`;

const Box = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 30px;
`;

export default function CartPage() {
    const { cartProducts } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if (cartProducts?.length > 0) {
            const idsWithCount = getIdsWithCount(cartProducts);

            axios.post('/api/cart', { ids: cartProducts })
                .then(response => {
                    const productsWithCount = response.data.map((product) => {
                        return {
                            ...product,
                            count: idsWithCount[product._id]
                        }
                    })

                    setProducts(productsWithCount);
                })
        }
    }, [cartProducts]);

    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        {products?.length > 0 ? (
                            <div>
                                {products.map((product) => (
                                    <div key={product._id}>
                                        {product.title}: {product.count}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>Your cart is empty</div>
                        )}
                    </Box>
                    {!!products?.length && (
                        <Box>
                            <h2>Order information</h2>
                            <input type="text" placeholder="Address" />
                            <input type="text" placeholder="Address 2" />
                            <Button
                                theme="primary"
                                fullwidth="true"
                            >Continue to payment</Button>
                        </Box>
                    )}
                </ColumnsWrapper>
            </Center>
        </>
    )
}