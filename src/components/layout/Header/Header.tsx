import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import Button from "components/layout/Button/Button";

export const Header = () => {
  const history = useHistory();
  return (
    <div className="c-header">
      <Button theme="transparent" onClick={() => history.goBack()}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="sm"
          style={{ margin: "10px", color: "black" }}
        />
      </Button>
    </div>
  );
};
