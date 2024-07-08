import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Category from "./pages/category/Category.jsx";
import Single from "./pages/single/Single.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/single/:articleId" element={<Single></Single>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
