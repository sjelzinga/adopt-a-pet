import React from "react";

type ContainerPosition = "top" | "bottom";

interface IProps {
  position: ContainerPosition;
}

const StickyContainer: React.FC<IProps> = ({ children, position }) => {
  return (
    <div className={`c-sticky-container position-${position}`}>{children}</div>
  );
};

// StickyContainer.defaultProps = {
//   position
// }

export default StickyContainer;
