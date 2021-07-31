import React from "react";

const PalabraConColores = (props) => {
  const {
    match: {
      params: { palabra, color, fondo },
    },
  } = props;
  return (
    <div className="contentCard">
      <h1 style={{ color, backgroundColor: fondo }}>{palabra}</h1>
    </div>
  );
};

export default PalabraConColores;
