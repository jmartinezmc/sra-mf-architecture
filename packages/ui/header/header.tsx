import React from "react";

export const Header: React.FunctionComponent<{
  title: string;
}> = ({ title }) => {
  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container d-flex flex-wrap justify-content-center">
        <span className="fs-4">Header component for {title}</span>
      </div>
    </header>
  );
};
