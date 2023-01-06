import React from "react";
import Button from "../button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <input
          value={keyword}
          className="form__input"
          type="text"
          onChange={handleChange}
          placeholder="Enter any word..."
        />
        <Button>Search</Button>
      </form>
    </>
  );
}
