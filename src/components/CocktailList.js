import React from "react";
import Cocktail from "./Cocktail";
export default function CocktailList({ cocktail, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading..</h2>;
  }
  if (cocktail.length < 1) {
    return <h2 className="section-title">no cocktatil matched</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">All Cocktails</h2>
      <div className="cocktails-center">
        {cocktail.map(item => {
          return <Cocktail key={item.id} {...item}></Cocktail>;
        })}
      </div>
    </section>
  );
}
