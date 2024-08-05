import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Initial } from "./pages/Initial";
import { Menu } from "./pages/Menu";
import { Menu_component } from "./components/Menu-component";
import NotFound from "./pages/NotFound";
import { Sobre } from "./pages/Sobre";
import { LayoutBase } from "./components/LayoutBase";
import Prato from "./pages/Prato";

export const IsRoutes = () => {
  return (
    <BrowserRouter>
      <Menu_component />
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<Initial />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/prato/:id" element={<Prato />} />
      </Routes>
    </BrowserRouter>
  );
};
