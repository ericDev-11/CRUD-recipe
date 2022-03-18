import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeItem
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              name={recipe.name}
              cuisine={recipe.cuisine}
              photo={recipe.photo}
              ingredients={recipe.ingredients}
              preparation={recipe.preparation}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
