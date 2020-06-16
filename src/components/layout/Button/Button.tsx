import React from "react";
import classnames from "classnames";

type ButtonTheme = "transparent" | "primary";
type ButtonSize = "full";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: ButtonTheme;
  size?: ButtonSize;
}

const Button: React.FC<IProps> = (props) => {
  const { children, className, theme, size, ...rest } = props;

  const styling = classnames({
    "c-button": true,
    [`c-button--theme-${theme}`]: Boolean(theme),
    [`c-button--size-${size}`]: Boolean(size),
    [`${className}`]: Boolean(className),
  });

  return (
    <button {...rest} className={styling}>
      {props.children}
    </button>
  );
};

export default Button;
