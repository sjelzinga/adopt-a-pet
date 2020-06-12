import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import Button from "components/layout/Button/Button";
import { paths } from "App";

export const Header = () => {
  const history = useHistory();

  const test = () => {
    history.push(paths.home);
    // () => history.goBack()
  };

  return (
    <div className="c-header">
      <Button theme="transparent" onClick={test}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="sm"
          style={{ margin: "10px", color: "black" }}
        />
      </Button>
    </div>
  );
};
