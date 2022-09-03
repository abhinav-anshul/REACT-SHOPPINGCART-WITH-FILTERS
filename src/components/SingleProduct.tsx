import { Card } from "react-bootstrap";
// import { ProductProps } from "./ProductProps";

function SingleProduct({ product }: any) {
  return (
    <>
      <div className="products">
        <Card>
          <Card.Img src={product.image} />
        </Card>
      </div>
    </>
  );
}

export { SingleProduct };
