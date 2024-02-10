import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  ProductPage,
  LoginPage,
  RegisterPage,
  CategoryPage,
  CartPage,
  FailurePage,
} from "./pages";
import { Navbar, Footer } from "./components";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/mouse" element={<CategoryPage />} />
          <Route path="/Login" element={<LoginPage />} /> 
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Cart" element={user ? <CartPage /> : <FailurePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const AuthRoutes = () => (
  <>
    <Route path="/Login" element={<LoginPage />} />
    <Route path="/Register" element={<RegisterPage />} />
  </>
);
