import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faPaw,
  faDog,
  faCat,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

export const FilterMenu = () => {
  return (
    <div className="filter-menu">
      <div className="filter-menu__header">
        <FontAwesomeIcon
          icon={faPaw}
          size="2x"
          className="filter-menu__logo--icon"
        />
        <FontAwesomeIcon icon={faFilter} />
      </div>
    </div>
  );
};
