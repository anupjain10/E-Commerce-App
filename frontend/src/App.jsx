import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import men_banner from "./assets/men_banner.png";
import women_banner from "./assets/women_banner.png";
import kid_banner from "./assets/kid_banner.png";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="top-right" richColors/>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="/women"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="/kid"
              element={<ShopCategory banner={kid_banner} category="kid" />}
            />
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="/:category/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
