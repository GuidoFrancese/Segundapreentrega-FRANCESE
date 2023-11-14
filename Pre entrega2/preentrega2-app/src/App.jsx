import { ItemDetailContainere, ItemListContainere, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainere greeting={"Bienvenidos a mi tienda"} />} />
        <Route path="/category/:category" element={<ItemListContainere greeting={"Bienvenidos a mi tienda"} />} />
        <Route path="/item/:id" element={<ItemDetailContainere />} />
      </Routes>
    </BrowserRouter>
  );
};