import Header from "./components/headers/Header";
import React, { useState } from "react";
import CuisineWrapper from "./components/cuisineCards/CuisineWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      </div>
    </Router>
  );
}

export default App;
