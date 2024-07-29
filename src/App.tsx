import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/navbar/navbar";
import Content from "./components/content/content.tsx";
import ProductElement from "./components/product_element/product_element.tsx";
import Footer from "./components/footer/footer.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarHeader />}>
            <Route index element={<Content />}></Route>
            <Route path="product" element={<ProductElement />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
