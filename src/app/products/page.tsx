import { productsEndpoint } from "@/src/lib/endpoints";
import React from "react";

const Products = async () => {
  const products = await productsEndpoint.getProducts();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
