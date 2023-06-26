import styled from '@emotion/styled';
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 15px 0;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 5px;  
  width: 250px;
  border-radius: 3px;
  font: inherit;

  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 1px rgba(5, 131, 131, 0.6);
  transition: box-shadow 200ms;

&:hover,
  &:focus,
  &:active {
    box-shadow: 0px 0px 7px 6px rgba(5, 131, 131, 0.24);
  `;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 225px;
`;

export const Button = styled.button`
  align-self: start;
  padding: 5px 20px;
  margin-left: 10px;
  

  background-color: teal;
  border: none;
  outline: none;
  color: aliceblue;
  border-radius: 5px;

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;