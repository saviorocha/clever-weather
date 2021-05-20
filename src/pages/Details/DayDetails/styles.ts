import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  border: 6px solid #2f237c;
  box-sizing: border-box;
  color: #fff;

  background: rgb(106, 153, 189);
  background: linear-gradient(
    180deg,
    rgba(106, 153, 189, 1) 0%,
    rgba(44, 33, 108, 1) 98%
  );
`;

export const Waves = styled.svg`
  position: absolute;
  --darkreader-inline-fill: #20165c;
`;

export const Header = styled.header`
  position: relative;

  margin: 10px;
  font-family: "Roboto", sans-serif;

  div.topo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    svg {
      width: 100%;
      height: 100%;
      margin-bottom: 40px;
      cursor: pointer;
      path {
      }
    }
    div.icone {
      width: 50px;
      height: 50px;
      padding: 10px;
      border: 2px solid #fff;
      border-radius: 50%;
    }
  }
  div.titulo {
    margin-top: 25px;

    h1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 1.5rem;
      text-align: center;
    }
  }
  h2 {
    font-size: 1.2rem;
    font-weight: normal;
    text-align: center;
  }

  span:first-of-type {
    color: #c5c5c5;
  }

  /* span:nth-of-type(2) {
    color: #e1e1e1;
  } */

  hr {
    margin-top: 5px;
    color: #fff;
  }
`;
export const Table = styled.table`
  position: relative;
  border-collapse: collapse; /* https://stackoverflow.com/questions/18679020/border-around-tr-element-doesnt-show */
  margin: 0 auto;
  font-weight: 400;
  tr {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #fff;
    svg {
      /* width: 100%;
      height: 100%; */
    }
  }
  td {
    padding: 10px 12px;
  }

  td:first-of-type {
    font-weight: bold;
    padding-right: 40px;
  }

  td {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 1px;
    svg {
      margin-right: 3px;
    }
  }
`;
