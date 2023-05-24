import React from "react";

export const isArrayEmpty = (arr) => {
  if ((arr !== null) & (arr !== undefined) && arr.length > 0) {
    return false;
  }

  return true;
};

export const ProductData = {
  title: "FitBit 19 - The Smartest Watch",
  description:
    "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",
  colorOptions: [
    {
      styleName: "Black Strap",
      imageUrl: "https://imgur.com/iOeUBV7.png",
    },
    {
      styleName: "Red Strap",
      imageUrl: "https://imgur.com/PTgQlim.png",
    },
    {
      styleName: "Blue Strap",
      imageUrl: "https://imgur.com/Mplj1YR.png",
    },
    {
      styleName: "Purple Strap",
      imageUrl: "https://imgur.com/xSIK4M8.png",
    },
  ],
  featureList: ["Time", "Heart Rate"],
};

export const data = [
  {
    id: "1",
    Nombre: "Jorge",
    Apellido: "Martinez",
    Ocupacion: "Doctor",
  },
  {
    id: "2",
    Nombre: "Maria",
    Apellido: "Robles",
    Ocupacion: "Maestra",
  },
  {
    id: "3",
    Nombre: "Roberto",
    Apellido: "Larios",
    Ocupacion: "Gerente",
  },
  {
    id: "4",
    Nombre: "Susana",
    Apellido: "Rocha",
    Ocupacion: "Cantante",
  },
  {
    id: "5",
    Nombre: "Raul",
    Apellido: "Ortiz",
    Ocupacion: "Inge",
  },
  {
    id: "6",
    Nombre: "Miguel",
    Apellido: "Zuñiga",
    Ocupacion: "Abogado",
  },
  {
    id: "7",
    Nombre: "Paco",
    Apellido: "Paquiño",
    Ocupacion: "Ladron de Bancos",
  },
];
