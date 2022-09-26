import React from 'react';
import './CuisineCards.css';
import { Time, Group } from '../../assets';
import { Link } from "react-router-dom";

function CuisineCard(props) {
  let { cuisine } = props;
  console.log(cuisine);
  return (
    <div className='cuisineCard'>
      <Link to={{pathname: `/recipe/${cuisine.id}`}}>
      <img className='cuisineImage' src={cuisine.image} alt="cuisine"></img>
      <h4 className='cuisineTitle'>{cuisine.title}</h4>
      <div className='cuisineInfo'>
        <Time />
        <span>{cuisine.readyInMinutes}</span>
        <Group />
        <span>{cuisine.servings}</span>
        </div>
        </Link>
    </div>
  )
}

export default CuisineCard