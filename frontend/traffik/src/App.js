import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import { AuthProvider } from "./hooks/AuthContext";
import Register from "./pages/register";
import Events from "./pages/events";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events/:mode" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
