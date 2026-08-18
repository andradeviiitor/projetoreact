import { useEffect, useState } from "react";
import "./Produto.css";

function Produto() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data.slice(0, 12));
      });
  }, []);

  return (
    <main className="produtos">
      <h1>Produtos</h1>

      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div className="card-produto" key={produto.id}>
            <img src={produto.image} alt={produto.title} />
            <h2>{produto.title}</h2>
            <p>R$ {produto.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Produto;