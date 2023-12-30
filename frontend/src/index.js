
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { UserProvider } from "./../src/context/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <BrowserRouter>
      <UserProvider> 
    <Routes>
      
        <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/admin/index" replace />} />
    </Routes>
    </UserProvider>

  </BrowserRouter>
);



