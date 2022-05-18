import React from "react";
import "./Buttons.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Buttons({ nextPage, prevPage }) {
  return (
    <div className="bBackground">
      <button className="bAnterior" onClick={prevPage}>
        <ArrowBackIosIcon />
      </button>
      <button className="bSiguiente" onClick={nextPage}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

export default Buttons;
