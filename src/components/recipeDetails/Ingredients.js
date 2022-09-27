import React from 'react'

function Ingredients(props) {

  const { ingredients } = props;

  console.log(ingredients)

  return (
    <div className='recipeIngredientsWrapper'>
      {
        ingredients.map(i => {
        return (
          <div className='recipeIngredientsName'>
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${i.image}`}></img>
            <span>
              {i.name}
            </span>
          </div>
          )
        })}
    </div>
  )
}

export default Ingredients