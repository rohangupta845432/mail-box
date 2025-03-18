import React, { useState } from "react";
import "./App.css"; // Add custom styling
import Dashboard from "./pages/Dashbord";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import ComposeEmail from "./pages/ComposeEmail";
import ViewEmail from "./pages/ViewEmail";
import ProtectRoute from "./components/ProtectRoute";
import SendEmail from "./pages/SendEmail";
import { useSelector } from "react-redux";

const App = () => {
  const auth = useSelector((store) => store.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={auth.isLogin ? <Navigate to={"/"} /> : <Login />}
        />
        {
          <Route
            path="/signup"
            element={auth.isLogin ? <Navigate to={"/"} /> : <SignUp />}
          />
        }
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectRoute>
          }
        />
        /compose-email
        <Route
          path="/compose-email"
          element={
            <ProtectRoute>
              <Layout>
                <ComposeEmail />
              </Layout>
            </ProtectRoute>
          }
        />
        <Route
          path="/send-email"
          element={
            <ProtectRoute>
              <Layout>
                <SendEmail />
              </Layout>
            </ProtectRoute>
          }
        />
        <Route
          path="/view-email"
          element={
            <ProtectRoute>
              <Layout>
                <ViewEmail />
              </Layout>
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
