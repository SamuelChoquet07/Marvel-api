import React from "react";
import { useLocation } from "react-router";
import Search from "../Search/Search";
import "./Header.css";

function Header({ onChangeSearch }) {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("char");

  return (
    <div className="header">
      <h1 className="title">MARVEL</h1>
      <Search search={search} onChangeSearch={onChangeSearch} />
    </div>
  );
}

export default Header;
