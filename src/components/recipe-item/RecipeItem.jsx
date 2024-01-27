import { useDispatch, useSelector } from "react-redux";

import * as Styles from "./styles";
import HeartIcon from "../../assets/heart.svg";
import FilledHeartIcon from "../../assets/filled-heart.svg";
import { actions } from "../../store/favorites/favorites.slice";

const RecipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((r) => r.id === recipe.id);

  const dispatch = useDispatch();

  console.log(favorites);

  return (
    <Styles.RecipeItem>
      <Styles.RecipeTitle>{recipe.name}</Styles.RecipeTitle>
      <Styles.AddToFavoritesButton
        onClick={() => dispatch(actions.toggleFavorites(recipe))}
      >
        {isFavorite ? (
          <Styles.HeartIcon src={FilledHeartIcon} alt="Filled Heart Icon" />
        ) : (
          <Styles.HeartIcon src={HeartIcon} alt="Heart Icon" />
        )}
      </Styles.AddToFavoritesButton>
    </Styles.RecipeItem>
  );
};

export default RecipeItem;
