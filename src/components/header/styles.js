import styled from "styled-components";

export const Header = styled.header`
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: grey;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export const FavoriteCounter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const FavoriteSpan = styled.span`
  position: absolute;
  top: -16%;
  left: 65%;
  padding: 4px 8px;
  background-color: red;
  border-radius: 50%;
  font-size: 14px;
  color: white;
  font-weight: 600;
`;
