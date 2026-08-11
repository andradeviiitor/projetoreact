import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produto />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}

export default App;