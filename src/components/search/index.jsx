import React, { useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Input } from "../input";

const Search = () => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <Input
        type="search"
        className="textField"
        style={{
          transition: "box-shadow .3s ease-in-out",
          boxShadow: focus ? "0 1px 6px rgb(32 33 36 / 28%)" : "none",
          borderColor: focus ? "rgba(223,225,229,0)" : "#dfe1e5",
        }}
        icon={
          focus ? (
            <FaArrowLeft
              color={"#f17140"}
              style={{ transition: "all 2s ease-in" }}
            />
          ) : (
            <FaSearch />
          )
        }
        placeholder="Search"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

export default Search;
