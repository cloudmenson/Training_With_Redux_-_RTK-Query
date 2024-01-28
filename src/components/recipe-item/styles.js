import styled from "styled-components";

export const RecipeItem = styled.div`
  padding: 40px 15px;
  margin: 20px;
  max-width: 300px;
  width: 100%;
  border: 1px solid #000000;
  text-align: center;
  border-radius: 20px;
`;

export const RecipeTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
`;

export const AddToFavoritesButton = styled.button`
  margin-top: 20px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeartIcon = styled.img`
  width: 30px;
  height: 30px;
`;
