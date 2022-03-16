import React from "react";

const colors = [
  "#FF1717",
  "#FF5C00",
  "#FF9900",
  "#E1CB02",
  "#7EE100",
  "#00E14D",
  "#00E1E1",
  "#1790FF",
  "#0029FF",
  "#7000FF",
  "#BE0072",
  "#BE0022",
  "#690003",
  "#634100",
  "#0E6300",
  "#002863",
  "#3D0063",
  "#292929",
  "#5C5C5C",
  "#939393",
];

const Colors = ({ value, setValue }) => {
  return (
    <>
      <i className="fa-solid fa-fill-drip"></i>
      <div className="colors">
        {colors.map((item, index) => (
          <div
            className="colors-item"
            key={index}
            style={{ backgroundColor: item }}
            onClick={() => setValue(item)}
          >
            {value === item && <i className="fa-solid fa-check"></i>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Colors;
