import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Smartphone",
    image: "./Images/S25.jpg",
    price: 299.99,
  },
  {
    id: 2,
    name: "Laptop",
    image: "./Images/laptop.jpg",
    price: 799.99,
  },
  {
    id: 3,
    name: "Headphones",
    image: "./Images/Headphones.jpg",
    price: 99.99,
  },
  {
    id: 4,
    name: "Smart Watch",
    image: "./Images/Smartwatch.jpg",
    price: 199.99,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    image: "./Images/Bluetoothspeaker.jpg",
    price: 49.99,
  },
  {
    id: 6,
    name: "PS5",
    image: "./Images/ps5.jpg",
    price: 799.99,
  },
];

const Products = () => {
  return (
    <div className="grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
