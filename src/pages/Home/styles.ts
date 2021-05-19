import styled from "styled-components";
import Img from "../../assets/photo-1601110958601-5616dcac1bcf.jpeg";

export const BackgroundImage = styled.div`
  background-color: #2f237c;
  background-image: url(${Img});
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: center;
  background-size: cover;

  border: 6px solid #2f237c;
  box-sizing: border-box;

  /* box-shadow: 0 0 0 13px #2f237c; */
  /* border-radius: 10px; */

  width: 100%;
  height: 100vh;

  /* div:first-child {
    border: 6px solid #2f237c;
    border-radius: 5px;
  } */
  /* mobile deitado */
  @media (min-width: 560px) and (max-height: 670px) {
    height: 100%;
  }
`;
