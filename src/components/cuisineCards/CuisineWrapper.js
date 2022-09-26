import CuisineCard from './CuisineCard'
import './CuisineCards.css'
import React, { useEffect, useState } from "react";

let API_KEY = '410f7fe0556d43eaba86c5fe51db1361';

function CuisineWrapper(props) {

  const [cuisines, setCuisines] = useState([]);

 useEffect(() => {
    if (props.selectedCuisine) {
      fetchCuisine();
    }
  }, [props.selectedCuisine]);

  async function fetchCuisine() {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedCuisine}&addRecipeInformation=true&number=1`);
    let cuisineData = await response.json();
    setCuisines(cuisineData.results);
  }

  console.log(cuisines);
  
  return (
    <div className='cuisine-tile'>
      {cuisines.map((i) => (
        <CuisineCard key={i.id} cuisine={i} />
        ))}
      
    </div>
  )
}

export default CuisineWrapper