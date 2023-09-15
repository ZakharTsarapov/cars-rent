import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";
// import css from "./App.module.css";

const Home = lazy(() => import("../views/Home/Home"));
const Favorites = lazy(() => import("../views/Favorites/Favorites"))
const Catalog = lazy(() => import("../views/Catalog/Catalog"))

const App = () => {
  return (

      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>

  );
};

export default App;
