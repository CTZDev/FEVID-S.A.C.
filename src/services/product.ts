import { products } from "../config/products.json";

export const getProductsBy = ({ id }: { id: string }) => {
  let product = products.find(prod => prod.id === id);
  return product;
};

export const getAllProducts = () => {
  return products;
};
