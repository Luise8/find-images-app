import React from "react";
import Button from "../button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`search/${keyword}`);
  }
  return (
    <>
      <form className="form" action="submit" onSubmit={handleSubmit}>
        <div className="form__container-search-bar">
          <input
            value={keyword}
            className="form__input"
            type="text"
            onChange={handleChange}
            placeholder={"Enter any word..."}
          />
          <div className="form__container-magnifying-glass">
            <FaSearch className="form__magnifying-glass"></FaSearch>
          </div>
        </div>
        <Button>Search</Button>
      </form>
    </>
  );
}
