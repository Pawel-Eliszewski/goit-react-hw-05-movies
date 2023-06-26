import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav role="navigation" className={css.nav}>
          <NavLink
            to="/"
            end
            className={css.link}
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : 'black',
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="movies"
            className={css.link}
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : 'black',
              };
            }}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={css.main}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
