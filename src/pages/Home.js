import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
  const [loading, setloading] = useState(false);
  const [cocktail, setcocktail] = useState([]);
  const [searchterm, setsearchterm] = useState("a");

  useEffect(() => {
    setloading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchterm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((drink) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = drink;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });

          setcocktail(newCocktails);
        } else {
          setcocktail([]);
        }
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    }
    getDrinks();
  }, [searchterm]);

  return (
    <main>
      <SearchForm setsearchterm={setsearchterm} />
      <CocktailList loading={loading} cocktail={cocktail} />
    </main>
  );
}
