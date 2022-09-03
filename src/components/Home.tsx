import { CartState } from "../context/Context";
import { SingleProduct } from "./SingleProduct";
import Filters from "./Filters";
// import { ProductProps } from "./ProductProps";

function Home() {
  const {
    state: { products }
  } = CartState();
  console.log("products", products);
  return (
    <>
      <div className="home">
        <Filters />
        <div className="productContainer">
          {products?.map((product: any) => {
            return <SingleProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export { Home };
