import { Heading, Button } from "@chakra-ui/react";
import "./RecipePage.css";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <div className="recipe-card-full">
      <Button
        onClick={onBack}
        className="back-button"
        colorScheme="green"
        mb={4}
      >
        Go Back
      </Button>
      <img src={recipe.image} alt={recipe.label} className="recipe-image" />

      <div className="recipe-details">
        <Heading className="recipe-name" as="h2" size="lg">
          {recipe.label}
        </Heading>

        <p>{recipe.mealType?.join(", ")}</p>
        <p>{recipe.dishType?.join(", ")}</p>
        <p>
          <strong>Total Cooking Time:</strong>{" "}
          {recipe.totalTime ? `${recipe.totalTime} mins` : "N/A"}
        </p>
        <p>
          <strong>Servings:</strong> {recipe.yield}
        </p>

        <p>
          {recipe.dietLabels?.map((label, index) => (
            <span key={index} className="highlight-purple">
              {label}
            </span>
          ))}
        </p>

        <div className="labels">
          <strong>Health Labels:</strong>
          {recipe.healthLabels?.map((label, index) => (
            <span key={index} className="highlight-green">
              {label}
            </span>
          ))}
        </div>

        <div className="labels">
          <strong>Cautions:</strong>
          {recipe.cautions?.length > 0 ? (
            recipe.cautions.map((caution, index) => (
              <span key={index} className="highlight-red">
                {caution}
              </span>
            ))
          ) : (
            <span>None</span>
          )}
        </div>

        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Total Nutrients</h3>
          <ul>
            <li>
              <strong>Energy:</strong>{" "}
              {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)} kcal
            </li>
            <li>
              <strong>Protein:</strong>{" "}
              {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
            </li>
            <li>
              <strong>Fat:</strong>{" "}
              {Math.round(recipe.totalNutrients.FAT.quantity)} g
            </li>
            <li>
              <strong>Carbs:</strong>{" "}
              {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g
            </li>
            <li>
              <strong>Cholesterol:</strong>{" "}
              {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg
            </li>
            <li>
              <strong>Sodium:</strong>{" "}
              {Math.round(recipe.totalNutrients.NA.quantity)} mg
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
