import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./useContext/DataContext";
import Loader from "./components/Loader/Loader";

//Dynamic Imports
const Home = lazy(() => import("./App"));
const RepoData = lazy(() => import("./pages/Data"));
const NoMatch = lazy(() => import("./pages/NoMatch"));
const ErrorBoundary = lazy(() => import("./pages/Error"));
const Login = lazy(() => import("././components/Authentication/Login"));
const Signup = lazy(() => import("./components/Authentication/SignuP"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <DataProvider>
      <Suspense fallback={<Loader/>}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/repository/:id" element={<RepoData />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/error" element={<ErrorBoundary />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      </DataProvider>
    </HelmetProvider>
  </React.StrictMode>
);
