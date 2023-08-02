import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
export const NavBar = ({ routes, navLinks }) => {
    return (_jsxs(BrowserRouter, { children: [_jsx("div", Object.assign({ className: "container-navbar" }, { children: navLinks.map((link) => (_jsx(Link, Object.assign({ to: link.path }, { children: link.label }), link.path))) })), _jsxs("div", Object.assign({ className: "containter-content" }, { children: [_jsx(Routes, { children: routes.map((route) => (_jsx(Route, { path: route.path, element: _jsx(Suspense, Object.assign({ fallback: "Loading..." }, { children: _jsx(route.element, {}) })) }, route.path))) }), _jsx(Outlet, {})] }))] }));
};
