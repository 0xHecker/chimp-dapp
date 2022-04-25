import styled from "styled-components";

const StyledBtn = styled.button`
  align-items: center;
  background-color: #0a66c2;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, "Roboto Mono", "Helvetica Neue", "Fira Sans",
    Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 35px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;

  &:hover {
    background-color: #16437e;
    color: #ffffff;
  }

  &:active {
    background: #09223b;
    color: rgb(255, 255, 255, 0.7);
  }

  &:disabled {
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.3);
  }
`;

export default StyledBtn;
