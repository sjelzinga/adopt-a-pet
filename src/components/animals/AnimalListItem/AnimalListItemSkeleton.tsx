import React from "react";
import { Skeleton } from "components/layout/Skeleton/Skeleton";

export const AnimalListItemSkeleton = () => {
  return (
    <li className="c-animal-list-item">
      <Skeleton className="image-small-border-radius" />

      <div className="c-animal-list-item__info">
        <Skeleton style={{ height: "10px", marginBottom: "30px" }} />
        <div className="c-animal-list-item__info--breed">
          <Skeleton style={{ height: "10px" }} />
        </div>
        <div className="c-animal-list-item__info--age">
          <Skeleton style={{ height: "10px" }} />
        </div>
      </div>
    </li>
  );
};
