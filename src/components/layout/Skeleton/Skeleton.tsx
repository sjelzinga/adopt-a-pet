import React from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Skeleton: React.FC<IProps> = (props) => {
  return (
    <div {...props}>
      <div className="c-skeleton" />
    </div>
  );
};
