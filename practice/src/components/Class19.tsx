import { useState } from "react";

function Class19() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    setProducts(data.products);
  };

  return (
    <div>
      <button onClick={fetchProducts}>Fetch Products</button>
      <p>{products.length} products fetched</p>
    </div>
  );
}

export default Class19;
