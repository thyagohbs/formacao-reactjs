import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
