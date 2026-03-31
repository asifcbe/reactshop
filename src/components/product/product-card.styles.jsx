import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "../button/button.styles.jsx";
import styled from "styled-components";
export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  alt: ${(props) => props.alt};
`;
export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  ${BaseButton}, ${InvertedButton}, ${GoogleSignInButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${BaseButton}, ${InvertedButton}, ${GoogleSignInButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;
export const Name = styled.span``;
export const Price = styled.span``;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  ${Name} {
    width: 90%;
    margin-bottom: 15px;
  }

  ${Price} {
    width: 10%;
  }
`;
