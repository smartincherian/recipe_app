import Header from "./components/headers/Header";
import React, { useState } from "react";
import CuisineWrapper from "./components/cuisineCards/CuisineWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeCard from "./components/recipeDetails/RecipeCard";

function App() {

  const [cuisine, setCuisine] = useState(null);

  function cuisineSelected(cuisine) {
    setCuisine(cuisine);
}
  return (
    <Router>
      <div>
        <Header cuisineSelect={cuisineSelected} />
        <CuisineWrapper selectedCuisine={cuisine} />
        <Routes>
          <Route path="/recipe/:recipeID" element={<RecipeCard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
