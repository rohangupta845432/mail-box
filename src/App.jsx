import React, { useState } from "react";
import "./App.css"; // Add custom styling
import Dashboard from "./pages/Dashbord";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ComposeEmail from "./pages/ComposeEmail";
import ViewEmail from "./pages/ViewEmail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        /compose-email
        <Route
          path="/compose-email"
          element={
            <Layout>
              <ComposeEmail />
            </Layout>
          }
        />
        <Route
          path="/send-email"
          element={
            <Layout>
              <ComposeEmail />
            </Layout>
          }
        />
        <Route
          path="/view-email"
          element={
            <Layout>
              <ViewEmail />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
