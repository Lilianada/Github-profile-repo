import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Data from "./pages/Data";
import Error from "./pages/Error";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import ErrorPage from "./components/404Page/404Page";
import DataProvider from "./useContext/DataContext";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./App"));
const RepoData = lazy(() => import("./pages/Data"));

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
            <Route path="*" element={<ErrorPage />} />
            <Route path="/error" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      </DataProvider>
    </HelmetProvider>
  </React.StrictMode>
);
