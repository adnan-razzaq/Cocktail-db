import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ id, name, image, info, glass }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <p>{glass}</p>
        <p>{info}</p>
        <Link to={`/cocktail/:${id}`} className="btn btn-primary">
          Go to
        </Link>
      </div>
    </article>
  );
}
