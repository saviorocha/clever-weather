import styled, { css } from "styled-components";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-family: "Raleway", sans-serif;
  color: #f0f0f0;
  font-size: 2.75rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  img {
    margin-top: 100px;
    margin-bottom: 16px;
    width: 100px;
    height: 100px;
  }
  @media (min-width: 560px) and (max-height: 670px) {
    img {
      margin-top: 20px;
      margin-bottom: 0;
    }
  }
`;

export const SearchBarForm = styled.form<FormProps>`
  margin-top: 80px;
  text-align: center;

  & div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }

  svg {
    color: #fff;
    margin: auto;
    transform: scaleX(-1); /* inverte horizontalmente */
  }

  input {
    margin-left: 0.2rem;

    color: white;
    background: transparent;
    border: none;

    font-family: "Raleway", sans-serif;
    font-size: 1.3rem;
    font-weight: 500;

    ::placeholder {
      color: #fff;
      opacity: 1;
    }

    &:focus ~ button {
      /* display: inline; */
      /* visibility: visible;
      position: relative;
      opacity: 1; */
    }
  }

  /* não funciona no Edge ou no IE */
  /* https://stackoverflow.com/questions/45962404/style-parent-component-on-input-focus-of-child-component-in-styled-components */
  div:focus-within ~ hr {
    color: white;
    transition: 1s;
  }

  hr {
    width: 100%;
    color: rgb(0, 0, 0, 0.8);
  }

  button {
    margin-top: 0.7em;
    position: static;
    margin-bottom: 10px;
    padding: 0.5rem;

    background-color: rgb(0, 0, 0, 0.09);
    background-repeat: no-repeat;
    color: #fff;
    border: 1px solid white;
    border-radius: 4px;

    font-family: "Raleway", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
  }
  @media (min-width: 560px) and (max-height: 670px) {
    margin-top: 0;
  }
`;

export const Erro = styled.span`
  display: block;
  transition: 1s;
  font-weight: bolder;
  font-size: 1.12rem;
  color: #d80000;
  margin-top: 8px;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
  svg {
    margin: auto;
    margin-top: 0.5em;
    /* display: flex; centraliza o svg */

    color: #fff;
    transform: scaleX(-1); /* inverte horizontalmente */
    width: 17%;
    height: 17%;
    /* text-align: center; */
  }

  button:focus ~ svg {
    -webkit-animation: bounce-top 0.9s both;
    animation: bounce-top 0.9s both;

    @-webkit-keyframes bounce-top {
      0% {
        -webkit-transform: translateY(-45px);
        transform: translateY(-45px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 1;
      }
      24% {
        opacity: 1;
      }
      40% {
        -webkit-transform: translateY(-24px);
        transform: translateY(-24px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      65% {
        -webkit-transform: translateY(-12px);
        transform: translateY(-12px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      82% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      93% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
      }
    }
    @keyframes bounce-top {
      0% {
        -webkit-transform: translateY(-45px);
        transform: translateY(-45px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 1;
      }
      24% {
        opacity: 1;
      }
      40% {
        -webkit-transform: translateY(-24px);
        transform: translateY(-24px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      65% {
        -webkit-transform: translateY(-12px);
        transform: translateY(-12px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      82% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      93% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
      }
    }
  }

  button {
    display: block;
    padding: 8px;
    margin-top: 0.7em;

    background-color: Transparent;
    background-repeat: no-repeat;
    color: #fff;
    border-radius: 8px;
    border: 3px solid white;

    font-family: "Raleway", sans-serif;
    font-size: 1.3rem;
    font-weight: bold;

    cursor: pointer;
    overflow: hidden;

    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

    /* para desktop - OBS: NÃO TA FUNCIONANDO :( */

    @media (min-width: 1025px) and (max-width: 1280px) {
      /* https://codepen.io/davidicus/pen/emgQKJ */
      border: 2px solid;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
      outline: 1px solid;
      outline-color: rgba(255, 255, 255, 0.5);
      outline-offset: 0px;
      text-shadow: none;
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      &:hover {
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
          0 0 20px rgba(255, 255, 255, 0.2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
      }
    }
  }
  /* para mobile - deitado */
  @media (min-width: 560px) and (max-height: 670px) {
    margin-top: 0;
    margin-bottom: 50px;
    svg {
      margin-top: 0;
      height: 15%;
      width: 15%;
    }
  }
`;
