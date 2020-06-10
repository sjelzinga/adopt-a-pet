import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  return (
    <div className="c-header">
      <FontAwesomeIcon icon={faChevronLeft} onClick={() => history.goBack()} />
    </div>
  );
};
