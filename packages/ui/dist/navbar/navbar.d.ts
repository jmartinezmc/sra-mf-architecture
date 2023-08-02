import React from "react";
export type Route = {
    element: React.FunctionComponent;
    path: string;
};
export type NavLink = {
    label: string;
    path: string;
};
export declare const NavBar: React.FunctionComponent<{
    routes: Route[];
    navLinks: NavLink[];
}>;
//# sourceMappingURL=navbar.d.ts.map