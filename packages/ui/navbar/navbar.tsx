import React, { Suspense } from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";

export type Route = {
    element: React.FunctionComponent;
    path: string;
  };
  
  export type NavLink = {
    label: string;
    path: string;
  };

export const NavBar: React.FunctionComponent<{
  routes: Route[];
  navLinks: NavLink[];
}> = ({ routes, navLinks }) => {
  return (
    <BrowserRouter>
      <div className="container-navbar">
        {navLinks.map((link) => (
          <Link to={link.path} key={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="containter-content">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={"Loading..."}>
                  <route.element></route.element>
                </Suspense>
              }
            />
          ))}
        </Routes>
        <Outlet />
      </div>
    </BrowserRouter>
  );
};
