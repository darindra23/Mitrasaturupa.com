import React from "react";
import { ProductConsumer } from '../../productcontext'
import BestProductContent from "./BestProductContent";

function AllProducts({ context }) {
    return (
        <>
            <ProductConsumer>
                {value => {
                    return value.products.map(product => {
                        return <BestProductContent key={product.id} product={product} />
                    })
                }}
            </ProductConsumer>
        </>
    );
}
export default AllProducts;