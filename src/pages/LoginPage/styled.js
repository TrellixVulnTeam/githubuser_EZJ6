import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #292929;
  width: 100vw;
  height: 100vh;
`;

export const Image = styled.img`
  width: 98px;
`;

export const ContainerInput = styled.div`
  max-width: 339px;
  width: 339px;
  background-color: #fff;
  margin: 35px 0 6px;
  box-shadow: 0 3px 6px #111;
  border-radius: 12px;
  border: 1px solid gray;
`;

export const Input = styled.input`
  outline: 0;
  font-size: 20px;
  line-height: 23px;
  padding: 16.5px 0px 16.5px 13px;
  border: none;
  width: 339px;
  box-sizing: border-box;
  border-radius: 12px;
`;

export const TextError = styled.span`
  font-size: 14px;
  color: #eb2d2d;
  width: 339px;
  padding-left: 15px;
`;

export const Button = styled.button`
  width: 339px;
  border-radius: 12px;
  box-shadow: 0px 3px 6px #111;
  outline: 0;
  height: 56px;
  background-color: #ffce00;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 80px;
  font: normal normal bold 18px/24px Roboto Slab;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Text = styled.span`
  padding: 0px 9px;
`;
