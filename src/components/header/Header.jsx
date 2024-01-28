import { useFavorites } from "../../hooks/useFavorites";
import { FiShoppingCart } from "react-icons/fi";

import * as Styles from "./styles";

const Header = () => {
  const { favorites } = useFavorites();

  return (
    <Styles.Header>
      <Styles.Title>Header</Styles.Title>

      <Styles.FavoriteCounter>
        <FiShoppingCart />

        <Styles.FavoriteSpan>{favorites.length}</Styles.FavoriteSpan>
      </Styles.FavoriteCounter>
    </Styles.Header>
  );
};

export { Header };
