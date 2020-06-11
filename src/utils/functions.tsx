import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

export const filterObjectKeys = (object: Object): ReactNode => {
  const objectArray = Object.entries(object);
  return objectArray.map((e) => {
    return (
      <li>
        <FontAwesomeIcon icon={e[1] ? faCheck : faTimes} />
        {e[0]}
      </li>
    );
  });
};

// export const filterObjectKeys = (object: Object): ReactNode => {
//   let countNull = 0;
//   const objectArray = Object.entries(object);

//   return objectArray.map((e) => {
//     if (e[1] === true) {
//       return <li>{e[0]}</li>;
//     } else if (!e[1]) {
//       countNull += 1;
//     }

//     if (countNull === objectArray.length) {
//       return <div>No information available</div>;
//     }
//   });
// };

// const handleNullValue = (objectValue: any) => {
//   let countNull = 0;

// }
