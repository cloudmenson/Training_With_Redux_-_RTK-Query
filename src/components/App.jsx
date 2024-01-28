import { Header } from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
import * as Styles from "./styles";

const recipeData = [
  { name: "Harry Potter Book", id: 1 },
  { name: "Porsche", id: 2 },
  { name: "Apple", id: 3 },
  { name: "Banana", id: 4 },
];

const App = () => {
  return (
    <>
      <Header />

      <Styles.Container>
        {recipeData?.map((item) => (
          <RecipeItem
            key={item.id}
            recipe={{ name: `${item.name}`, id: `${item.id}` }}
          />
        ))}
      </Styles.Container>
    </>
  );
};

export default App;
