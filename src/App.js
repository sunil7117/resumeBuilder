import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact activePage="contact" />} />
        <Route path="/blog" element={<Blog activePage="blog" />} />
        <Route
          path="/blog-details"
          element={<BlogDetails activePage="blog" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
