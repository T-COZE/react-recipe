import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe= (data)=>{
    setRecipes([...recipes, data])
  }
  const deleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1 style={
        { display:"flex",
         fontSize:"64px",
         justifyContent:"center",
         fontFamily:'Playfair Display SC' }
         }>Delicious Food Recipes</h1></header>
      <RecipeList  recipes ={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;


