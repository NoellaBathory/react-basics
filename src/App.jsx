import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import "./App.css";
import { RecipePage } from "./pages/RecipePage";
import { Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const clearSelection = () => {
    setSelectedRecipe(null);
  };
  return (
    <div className="App">
      <Heading className="title" as="h1" size="4xl">
        Recipe App
      </Heading>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBack={clearSelection} />
      ) : (
        <RecipeListPage onRecipeSelect={handleRecipeSelect} />
      )}
    </div>
  );
};

export default App;
