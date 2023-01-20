import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import ShoppingDetail from "./pages/ShoppingDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact activePage="contact" />} />
        <Route path="/blog" element={<Blog activePage="blog" />} />
        <Route path="/blog/a" element={<BlogDetails />} />
        <Route path="/shoppingdetail" element={<ShoppingDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
