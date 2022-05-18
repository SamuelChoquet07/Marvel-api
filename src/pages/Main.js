import React, { useContext, useEffect, useMemo, useState } from "react";
import Header from "../components/Header/Header";
import CharacterContext from "../context/CharacterContext";
import List from "../components/List/List";
import Buttons from "../components/Buttons/Buttons";
import "./Main.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

function Main() {
  const location = useLocation();
  const { getCharacters, character } = useContext(CharacterContext);
  const [search, setSearch] = useState("");
  const [currPage, setCurrPage] = useState(0);
  const itemsPerPage = 10;
  const navigation = useNavigate();

  const handleSearch = (character) => {
    const name = character.name.toLowerCase();
    return name.includes(search) || !search;
  };

  const filteredCharacter = useMemo(() => {
    if (search?.length > 0) {
      return character
        .filter(handleSearch)
        .slice(itemsPerPage * currPage, itemsPerPage * currPage + itemsPerPage);
    }
    return character.slice(
      itemsPerPage * currPage,
      itemsPerPage * currPage + itemsPerPage
    );
  }, [search, character, currPage, itemsPerPage]);

  function nextPage() {
    if (currPage * itemsPerPage < 90) {
      const url = new URLSearchParams(location.search);
      url.set("page", currPage + 1);
      navigation("?" + url.toString(), { replace: true });
    }
  }

  function prevPage() {
    if (currPage * itemsPerPage > 0) {
      const url = new URLSearchParams(location.search);
      url.set("page", currPage - 1);
      navigation("?" + url.toString(), { replace: true });
    }
  }

  const onChangeSearch = (event) => {
    const url = new URLSearchParams(location.search);
    url.set("char", event.target.value);
    url.set("page", 0);
    navigation("?" + url.toString(), { replace: true });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    setSearch(new URLSearchParams(location.search).get("char"));
    const Page = Number(new URLSearchParams(location.search).get("page"));
    if (Number.isSafeInteger(Page)) {
      setCurrPage(Page);
    }
  }, [location.search]);

  return (
    <div className="mainDiv">
      <Header search={search} onChangeSearch={onChangeSearch} />
      <List filteredCharacter={filteredCharacter} />
      <Buttons nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default Main;
