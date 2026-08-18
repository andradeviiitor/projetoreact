import { useEffect, useState } from "react";
import "./Fazerpedido.css";

function Fazerpedido() {
  const [produtos, setProdutos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data.slice(0, 12));
      });
  }, []);

  function selecionarProduto(produto) {
    const jaSelecionado = selecionados.some(
      (item) => item.id === produto.id
    );

    if (jaSelecionado) {
      setSelecionados(
        selecionados.filter((item) => item.id !== produto.id)
      );
    } else {
      setSelecionados([...selecionados, produto]);
    }
  }

  const total = selecionados.reduce(
    (soma, produto) => soma + produto.price,
    0
  );

  return (
    <main className="fazer-pedido">
      <h1>Fazer Pedido</h1>

      <p className="subtitulo">
        Selecione os produtos que deseja pedir.
      </p>

      <div className="pedido-grid">
        {produtos.map((produto) => {
          const selecionado = selecionados.some(
            (item) => item.id === produto.id
          );

          return (
            <div
              className={`produto-pedido ${
                selecionado ? "selecionado" : ""
              }`}
              key={produto.id}
            >
              <img src={produto.image} alt={produto.title} />

              <div className="produto-info">
                <h2>{produto.title}</h2>

                <p>US$ {produto.price.toFixed(2)}</p>
              </div>

              <button
                className="botao-selecionar"
                onClick={() => selecionarProduto(produto)}
              >
                {selecionado ? "✓ Selecionado" : "Selecionar"}
              </button>
            </div>
          );
        })}
      </div>

      <section className="resumo-pedido">
        <div>
          <span>Produtos selecionados</span>
          <strong>{selecionados.length}</strong>
        </div>

        <div>
          <span>Total</span>
          <strong>US$ {total.toFixed(2)}</strong>
        </div>

        <button className="finalizar-pedido">
          Fazer pedido
        </button>
      </section>
    </main>
  );
}

export default Fazerpedido;