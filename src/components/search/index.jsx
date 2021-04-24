import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../input";

const Search = () => {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <Input
        style={{ border: "none" }}
        type="search"
        className="textField"
        icon={<FaSearch />}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
