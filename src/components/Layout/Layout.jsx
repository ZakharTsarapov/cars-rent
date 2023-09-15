import { Link, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
  return (
    <div className={css.container}>
      <header>
        <ul className={css.list}>
          <li>
            <Link className={css.nav} to="/">
              Home Page
            </Link>
          </li>
          <li>
            <Link className={css.nav} to="/catalog">
              Catalog Page
            </Link>
          </li>
          <li>
            <Link className={css.nav} to="/favorites">
              Favorites Page
            </Link>
          </li>
        </ul>
      </header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};
