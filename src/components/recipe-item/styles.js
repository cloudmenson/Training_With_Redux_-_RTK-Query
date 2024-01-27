import styled from "styled-components";

export const RecipeItem = styled.div`
  padding: 15px;
  margin: 20px;
  max-width: 300px;
  width: 100%;
  border: 1px solid white;
  text-align: center;
`;

export const RecipeTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
`;

export const AddToFavoritesButton = styled.button`
  padding: 5px;
  margin-top: 10px;
  background-color: red;
  border-radius: 5px;
  transition: all 0.15s;

  &:hover {
    background-color: black;
    color: white;
  }
`;
