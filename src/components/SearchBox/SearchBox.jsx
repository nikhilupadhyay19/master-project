import React from "react";

export const SearchBox = (prop) => {
  const { searchProductHandler } = prop;

  return (
    <React.Fragment>
      <label for="exampleDataList" class="form-label">
        Datalist example
      </label>
      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        onChange={searchProductHandler}
      />
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
      </datalist>
    </React.Fragment>
  );
};
