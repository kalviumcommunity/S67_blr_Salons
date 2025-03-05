import { useEffect, useState } from "react";

function SalonList() {
  const [salons, setSalons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/salons")
      .then((response) => response.json())
      .then((data) => setSalons(data));
  }, []);
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> - ${product.price} <br />
            <em>{product.description}</em> <br />
            Category: {product.categoryId?.name || "No category"}
          </li>
        ))}
      </ul>
    </div>
  );
}