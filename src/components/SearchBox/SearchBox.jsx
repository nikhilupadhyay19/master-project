import React from "react";

export const SearchBox = (prop) => {
  const { searchProductHandler } = prop;

  return (
    <React.Fragment>
      <label htmlFor="exampleDataList" className="form-label">
        Datalist example
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        onChange={searchProductHandler}
      />
    </React.Fragment>
  );
};
