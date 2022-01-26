import React from "react";

export default function Child(props) {
  let { src, name, name1 } = props.propSource;

  return (
    <div>
      <img style={{ width: "50" }} src={src}></img>
      <p>{name}</p>
      <p>{name1}</p>
    </div>
  );
}
