import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  let { id } = useParams();

  id = id.slice(1);

  const [loading, setloading] = useState(false);
  const [cocktail, setcocktail] = useState(null);

  useEffect(() => {
    setloading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strGlass: glass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strCategory: category,
            strAlcoholic: info,
            strInstructions: instruction,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            glass,
            category,
            info,
            instruction,
            ingredients,
          };
          setcocktail(newCocktail);
        } else {
          setcocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <h2 className="section-title">Loading.....</h2>;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const {
      name,
      image,
      glass,
      instruction,
      ingredients,
      info,
      category,
    } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Go back
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt="" />
          <div className="drink-info">
            <p>name:{name}</p>
            <p>category:{category}</p>
            <p>info:{info}</p>
            <p>glass:{glass}</p>
            <p>instructions:{instruction}</p>
            <p>
              ingredients:{" "}
              {ingredients.map((ingre, index) => {
                return ingre ? <span key={index}>{ingre}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
