import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Initial } from "./pages/Initial";
import { Menu } from "./pages/Menu";
import { Menu_component } from "./components/Menu-component";

export const IsRoutes = () => {
  return (
    <BrowserRouter>
      <Menu_component />
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};
