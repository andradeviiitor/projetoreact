import "./Menucima.css";


export default function Menucima() {
  return (
    <header className="menu-cima">
      <nav className="menu-container">
        <div className="navbar-links">
          <a href="/produto">PRODUTOS</a>
          <a href="/fazerpedido">FAZER PEDIDO</a>
          <a href="tel:+5585999999999">(85) 99957-2552</a>
        </div>
      </nav>
    </header>
  );
}