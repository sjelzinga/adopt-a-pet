import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

type ListTheme = "horizontal" | "vertical";

interface IProps {
  list: object;
  theme?: ListTheme;
}

export const CheckList: React.FC<IProps> = ({ list, theme }) => {
  const styling = classnames({
    "c-check-list": true,
    [`c-check-list--theme-${theme}`]: Boolean(theme),
  });

  const checkList = () => {
    const objectArray = Object.entries(list);
    return objectArray.map((e, indx) => {
      return (
        <li className="c-check-list__item" key={indx}>
          <FontAwesomeIcon
            className="c-check-list__item__icon"
            icon={e[1] ? faCheck : faTimes}
          />
          <span className="c-check-list__item__value">{e[0]}</span>
        </li>
      );
    });
  };

  return <ul className={styling}>{checkList()}</ul>;
};
