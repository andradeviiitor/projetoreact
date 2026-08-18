import { Routes, Route } from "react-router";

import Menucima from "./pages/Menucima";
import Produto from "./pages/Produto";
import Fazerpedido from "./pages/Fazerpedido";

function App() {
  return (
    <>
      <Menucima />
      <Routes>
        <Route path="/" element={<Produto />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/fazerpedido" element={<Fazerpedido />} />
      </Routes>
    </>
  );
}

export default App;