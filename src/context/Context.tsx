import { createContext, ReactNode, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "../context/Reducer";

const Cart = createContext({});

type ContextProps = {
  children: ReactNode;
};

function Context({ children }: ContextProps) {
  const products = [...Array(20)]?.map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.cats(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
  }));

  const [state, dispath] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  return (
    <Cart.Provider value={{ state, dispath }}>{children}</Cart.Provider>
  );
}

export default Context;

export function CartState() {
  return useContext(Cart);
}
