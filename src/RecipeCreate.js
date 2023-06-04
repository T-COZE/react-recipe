import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const [recipe, setRecipe] = useState({
    name:"",
    cuisine: "",
    photo:"",
    ingredients:"",
    preparation:"",
  })


  const handleChange = (event) => {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!recipe.name || !recipe.cuisine || !recipe.photo || recipe.ingredients || recipe.preparation){
      return null
    } 
    addRecipe(recipe)
    setRecipe({...recipe})
  }

  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={recipe.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Cuisine"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
            <input
              placeholder="Url"
              name="photo"
              type="url"
              value={recipe.photo}
              onChange={handleChange}
            />
            </td>
            <td>
              <textarea name="ingredients"
                type="textarea"
                placeholder="Ingredients"
                id="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea name="preparation"
                type="textarea"
                placeholder="Preparation"
                id="preparation"
                value={recipe.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
