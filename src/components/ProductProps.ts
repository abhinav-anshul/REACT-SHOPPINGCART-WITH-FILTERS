export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: Array<number>;
  fastDelivery: boolean;
  ratings: Array<number>;
};
