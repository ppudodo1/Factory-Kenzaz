import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Category from "./pages/category/Category.jsx";
import Single from "./pages/single/Single.jsx";
import SignIn from "./pages/signIn/SignIn.jsx";
import LogIn from "./pages/logIn/LogIn.jsx";
import UserProfile from "./pages/userProfile/UserProfile.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/category/*" element={<Category></Category>}></Route>
          <Route
            path="/category/news/:index"
            element={<Category></Category>}
          ></Route>
          <Route
            path="/category/business/:index"
            element={<Category></Category>}
          ></Route>
          <Route
            path="/category/sport/:index"
            element={<Category></Category>}
          ></Route>
          <Route
            path="/category/life/:index"
            element={<Category></Category>}
          ></Route>
          <Route
            path="/category/tech/:index"
            element={<Category></Category>}
          ></Route>
          <Route
            path="/category/travel/:index"
            element={<Category></Category>}
          ></Route>
          <Route
            path="/category/news/:index"
            element={<Category></Category>}
          ></Route>
          <Route path="/single/:articleId" element={<Single></Single>}></Route>
          <Route path="/signIn" element={<SignIn></SignIn>}></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route
            path="/userProfile"
            element={<UserProfile></UserProfile>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
