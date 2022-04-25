import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0;
  height: 200vh;
  margin: 0;
  div {
    width: 100%;
  }
`;

export const StyledBox = styled.div`
  color: #fff;
  padding: 1rem;
  margin-top: 70px;
  z-index: 0;

  /* width: ${(props) => (props.isOpen ? "90%" : "60%")}; */
  position: relative;
  background: #f2f2f2;
  overflow: hidden;
  background: #00073d0a;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 1);
  transition: all 0.3s ease-in-out;
  height: 600px;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 500px;
  }
  @media (max-width: 768px) {
    /* width: ${(props) => (props.isOpen ? "200px" : "250px")}; */
  }
`;

export const StyledBoxTwo = styled.div`
  background-color: black;
  color: #fff;
  padding: 1rem;
  margin-top: 50px;
  z-index: 1;
  height: 270px;
  /* width: ${(props) => (props.isOpen ? "1500px" : "1800px")}; */
  background: #f2f2f2;
  overflow: hidden;
  background: #00073d;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 20px;
  box-shadow: 0px 0px 16px 4px #9154ff;

  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    /* width: ${(props) => (props.isOpen ? "200px" : "250px")}; */
  }
`;

export const StyledBoxOneChild = styled.div`
  background-color: black;
  padding: 1rem;
  margin: 30px;
  z-index: -5;
  background: #f2f2f2;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  font-family: monospace;
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    align-items: flex-start;
    margin-left: 50px;
  }

  li {
    color: #fff;
    word-spacing: 2px;
    line-height: 40px;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
  }
`;

// export { StyledContainer, StyledBox, StyledBoxTwo, StyledBoxOneChild };
