import * as Styles from "./styles";
import { useActions } from "../../hooks/useActions";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavorites } from "../../hooks/useFavorites";

const RecipeItem = ({ recipe }) => {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useActions();

  const isFavorite = favorites.some((r) => r.id === recipe.id);

  console.log(...favorites);

  return (
    <Styles.RecipeItem>
      <Styles.RecipeTitle>{recipe.name}</Styles.RecipeTitle>
      <Styles.AddToFavoritesButton onClick={() => toggleFavorites(recipe)}>
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </Styles.AddToFavoritesButton>
    </Styles.RecipeItem>
  );
};

export default RecipeItem;
