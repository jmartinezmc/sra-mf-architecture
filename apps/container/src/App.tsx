import React from "react";
import "./App.css";
import { NavBar } from "ui";
// @ts-ignore
const LaboratorioApp = React.lazy(() => import("laboratorio/LaboratorioApp"));
// @ts-ignore
const SociosApp = React.lazy(() => import("socios/SociosApp"));

function App() {
  const routes = [
    {
      path: "/",
      element: () => <div>Container Application</div>,
    },
    {
      path: "/laboratorio",
      element: () => <LaboratorioApp />,
    },
    {
      path: "/socios",
      element: () => <SociosApp />,
    },
  ];

  const navLinks = [
    {
      label: "Container",
      path: "/",
    },
    {
      label: "Laboratorio",
      path: "/laboratorio",
    },
    {
      label: "Socios",
      path: "/socios",
    },
  ];

  return (
    <div className="container">
      <NavBar routes={routes} navLinks={navLinks} />
    </div>
  );
}

export default App;
