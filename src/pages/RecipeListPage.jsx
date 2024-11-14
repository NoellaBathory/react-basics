import { useState } from "react";
import "./RecipeListPage.css";
import RecipeCard from "../components/RecipeCard";
import { data } from "../utils/data";

export const RecipeListPage = ({ onRecipeSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRecipes = data.hits.filter((hit) => {
    const matchesSearchQuery = hit.recipe.label
      .toLowerCase()
      .includes(searchQuery);

    return matchesSearchQuery;
  });

  return (
    <div className="recipe-list-page">
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by recipe name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="recipe-list">
        {filteredRecipes.map((hit, index) => (
          <RecipeCard
            key={index}
            recipe={hit.recipe}
            onClick={() => onRecipeSelect(hit.recipe)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeListPage;
