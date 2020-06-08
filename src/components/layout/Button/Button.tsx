import React from "react";

interface IProps {}

export const Button: React.FC<IProps> = ({ children }) => {
  return <button className="c-button">{children}</button>;
};
