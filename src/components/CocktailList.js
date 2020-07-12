import React from "react";
import Cocktail from "./Cocktail.js";

export default function CocktailList({ cocktail, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (cocktail.length < 1) {
    return <h2 className="section-title">item not found</h2>;
  }

  return (
    <section className="section">
      <h1 className="section-title">Cocktails</h1>
      <div className="cocktails-center">
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
