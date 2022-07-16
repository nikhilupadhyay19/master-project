import React from "react";

export const SelectBox = (props) => {
  const { data, selectChangeHandler } = props;
  const continents = data
    .map((el) => el.continents[0])
    .reduce(
      (acc, el) => {
        if (acc.indexOf(el) === -1) {
          acc.push(el);
        }
        return acc;
      },
      ["Select All Continents"]
    );

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={selectChangeHandler}
    >
      {continents.map((el) => {
        return (
          <option value={el} key={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};
