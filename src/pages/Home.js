import React from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktail, setCocktail] = React.useState([]);

  React.useEffect(() => {
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktail = drinks.map(item => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlchoholic,
              strGlass
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlchoholic,
              glass: strGlass
            };
          });
          setCocktail(newCocktail);
        } else {
          setCocktail([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm}></SearchForm>
      <CocktailList loading={loading} cocktail={cocktail}></CocktailList>
    </main>
  );
}
