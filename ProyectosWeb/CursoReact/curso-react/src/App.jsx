import React, { useState } from "react";
import "./Estilos/App.css";
import CardContent from "./CardContent";
import ProductContent from "./ProductContent";
import { isArrayEmpty, ProductData, data } from "./Utils";

const App = () => {
  const [clic, setClic] = useState(true);
  const [img, setImg] = useState("https://imgur.com/iOeUBV7.png");

  const getData = isArrayEmpty(data)
    ? []
    : data.map((item) => {
        return (
          <CardContent
            id={item.id}
            Nombre={item.Nombre}
            Apellido={item.Apellido}
            Ocupacion={item.Ocupacion}
          />
        );
      });

  const ocultarBtnClic = () => {
    setClic(!clic);
  };

  const cambiarImg = (source) => {
    setImg(source);
  };

  return (
    <div className="Main-div">
      <div className="MiniMain">
        <div className="btnContainer">
          <button onClick={ocultarBtnClic}>Ocultar informacion</button>
        </div>
        <div className="CardContainer">{clic ? getData : null}</div>
        <div className="MainProduct">
          <div className="ProductImg">
            <img src={img} />
          </div>
          <div className="ProductContainer">
            <ProductContent
              title={ProductData.title}
              description={ProductData.description}
              cambiarImg={cambiarImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
