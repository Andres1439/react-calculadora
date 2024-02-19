import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  // Otra forma de interpretar este return

  // if (esOperador(props.children)) {
  //   return (
  //     <div
  //       className={"boton-contenedor operador"}
  //       onClick={() => props.manejarClick(props.children)}
  //     >
  //       {props.children}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className={"boton-contenedor"} onClick={() => props.manejarClick(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // }

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
  // Tambien podemos cambiar el div, por algun button para poder identificar mejor la etiqueta
}

export default Boton;
