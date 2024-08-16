import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Settings } from "./pages/settings";
import { AddProduct } from "./pages/addProduct";
import { Cart } from "./pages/cart";
import { Payments } from "./pages/payments";
import { Users } from "./pages/users";
import { Login } from "./pages/login";
import { CategoryProduct } from "./pages/CategoryProduct";
import { EditProduct } from "./pages/editProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="products" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payments" element={<Payments />} />
          <Route path="category-product/:id" element={<CategoryProduct />} />
          <Route path="product-edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
