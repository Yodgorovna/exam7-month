import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Settings } from "./pages/settings";
import { AddProduct } from "./pages/addProduct";
import { Cart } from "./pages/cart";
import { Payments } from "./pages/payments";
import { Users } from "./pages/users";
import { Login } from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
          <Route path="addProducts" element={<AddProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payments" element={<Payments />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /*  */
}
