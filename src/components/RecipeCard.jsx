import { Heading } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  const { mealType, dishType, healthLabels, dietLabels, cautions } = recipe;

  return (
    <div
      className="recipe-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img src={recipe.image} alt={recipe.label} />
      <Heading as="h3" size="lg">
        {recipe.label}
      </Heading>

      <div className="health-labels">
        {healthLabels.includes("Vegan") && (
          <p className="highlight-green">Vegan</p>
        )}
        {healthLabels.includes("Vegetarian") && (
          <p className="highlight-green">Vegetarian</p>
        )}

        {dietLabels && dietLabels.length > 0 && (
          <p className="highlight-purple">{dietLabels.join(", ")}</p>
        )}
      </div>
      {mealType && mealType.length > 0 && <p>{mealType.join(", ")}</p>}
      {dishType && dishType.length > 0 && <p>{dishType.join(", ")}</p>}

      {cautions && cautions.length > 0 && (
        <p className="highlight-red">{cautions.join(", ")}</p>
      )}
    </div>
  );
};
export default RecipeCard;
