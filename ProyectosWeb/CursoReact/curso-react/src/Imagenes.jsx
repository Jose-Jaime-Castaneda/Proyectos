import React, { useState } from "react";

const Imagenes = (props) => {
  const [estilo, setEstilo] = useState("BlackStrap");

  function handleImgClick() {
    props.imgClicked(props.source);
    setEstilo(props.title);
  }

  return (
    <div className="relogImg">
      <img
        src={props.source}
        onClick={handleImgClick}
        className="relogImgProduct"
      ></img>
    </div>
  );
};

export default Imagenes;
