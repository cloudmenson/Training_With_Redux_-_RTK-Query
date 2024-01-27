import { useDispatch, useSelector } from "react-redux";

import * as Styles from "./styles";
import { actions } from "../../store/favorites/favorites.slice";

const RecipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  console.log(favorites);

  return (
    <Styles.RecipeItem>
      <Styles.RecipeTitle>{recipe.name}</Styles.RecipeTitle>

      <Styles.AddToFavoritesButton onClick={() => dispatch(actions.toggleFavorites(recipe))}>
        Add to Favorites
      </Styles.AddToFavoritesButton>
    </Styles.RecipeItem>
  );
};

export default RecipeItem;
