import React, { useState } from "react";
import { ProductData } from "./Utils";
import Imagenes from "./Imagenes";

const ProductContent = (props) => {
  const [btnTiempo, setBtnTiempo] = useState(false);
  const [btnRitmo, setBtnRitmo] = useState(false);

  function handleClickTiempo() {
    setBtnTiempo(true);
    setBtnRitmo(false);
  }

  function handleClickRitmo() {
    setBtnRitmo(true);
    setBtnTiempo(false);
  }

  function imgClicked(nombreImg) {
    props.cambiarImg(nombreImg);
  }

  const getImg = ProductData.colorOptions.map((img) => {
    return (
      <Imagenes
        source={img.imageUrl}
        title={img.styleName}
        imgClicked={imgClicked}
      />
    );
  });

  return (
    <div className="ProductInfo" key={props.id}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h2>Seleccionar color</h2>
      <div className="imgContainer">{getImg}</div>
      <h2>Características</h2>
      <div className="productBtn">
        <button
          className={btnTiempo ? "btnPressed" : "btnDefault"}
          onClick={handleClickTiempo}
        >
          Tiempo
        </button>
        <button
          className={btnRitmo ? "btnPressed" : "btnDefault"}
          onClick={handleClickRitmo}
        >
          Ritmo Cardiaco
        </button>
      </div>
      <button className="btnComprar">Comprar</button>
    </div>
  );
};

export default ProductContent;
