import RecipeItem from "./components/recipe-item/RecipeItem";
import * as Styles from "./styles";

const App = () => {
  return (
    <Styles.Container>
      <RecipeItem recipe={{ name: "Harry Potter Book", id: 1 }} />
      <RecipeItem recipe={{ name: "Porsche", id: 2 }} />
      <RecipeItem recipe={{ name: "Apple", id: 3 }} />
    </Styles.Container>
  );
};

export default App;
