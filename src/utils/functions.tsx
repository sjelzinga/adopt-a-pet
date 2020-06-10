import React, { ReactNode } from "react";

export const filterObjectKeys = (object: Object): ReactNode => {
  return Object.entries(object).map((e) => {
    if (e[1] === true) {
      return <li>{e[0]}</li>;
    }
  });
};
