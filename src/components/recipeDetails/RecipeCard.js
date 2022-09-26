import React, { useEffect, useState } from "react";
import './RecipeCards.css';
import { Link, useParams } from "react-router-dom";
import Ingredients from "./Ingredients";

let API_KEY = '410f7fe0556d43eaba86c5fe51db1361';

function RecipeCard() {
    let { recipeID } = useParams();
    const [recipe, setRecipe] = useState({});
    console.log(recipeID);

    useEffect(() => {
        fetchRecipeInfo();
      }, [recipeID]);

    async function fetchRecipeInfo() {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`);
        let recipeInfo = await response.json();
        setRecipe(recipeInfo);
      }
  return (
      <div className='recipeCard'>
          <Link to="/">
              <button className='closeButton'>X</button>
          </Link>
          {/* Header */}
          <div className="recipeHeader" style={{ backgroundImage: `url(${recipe.image})` }}>
              <span className="recipeTitle">{recipe.title}</span>
          </div>
          {/* Summary */}
          <p className="recipeSummary" dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
          {/* Ingredients */}
          <Ingredients/>
          {/* Instrucions */}
      </div>
  )
}

export default RecipeCard