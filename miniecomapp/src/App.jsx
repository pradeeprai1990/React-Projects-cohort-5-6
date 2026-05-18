import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Contact from "./components/pages/Contact";
import MainLayout from "./components/common/MainLayout";
import Product from "./components/pages/Product";
import ProductDetails from "./components/pages/ProductDetails";
import Error404 from "./components/pages/Error404";
import ProductAPI from "./components/pages/ProductAPI";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {/* http://localhost:5173/ */}
            <Route path={"/"} element={<Home />} />
            {/* http://localhost:5173/cart */}
            <Route path={"/cart"} element={<Cart />} />
            {/* http://localhost:5173/login */}

            {/* http://localhost:5173/register */}
            <Route path={"/register"} element={<Register />} />

            <Route path={"/contact-us"} element={<Contact />} />
            <Route path={"/product"} element={<Product />} />

              <Route path={"/product-api"} element={<ProductAPI />} />

            <Route path={"/product/:id"} element={<ProductDetails />} />
            <Route path={"*"} element={<Error404 />} />




          </Route>
           
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
