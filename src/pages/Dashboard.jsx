import styled from "styled-components";

const StyledContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledBox = styled.div`
  background-color: black;
  color: #fff;
  padding: 1rem;
  margin-top: 70px;
  z-index: 1;
  height: 500px;
  width: ${(props) => (props.isOpen ? "1500px" : "1800px")};
  background: #f2f2f2;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 1);
  transition: all 0.3s ease-in-out;
`;

const StyledBoxTwo = styled.div`
  background-color: black;
  color: #fff;
  padding: 1rem;
  margin-top: 50px;
  z-index: 1;
  height: 270px;
  width: ${(props) => (props.isOpen ? "1500px" : "1800px")};
  background: #f2f2f2;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 1);
  transition: all 0.3s ease-in-out;
`;

const Dashboard = ({ isOpen }) => {
  return (
    <StyledContainer>
      <div>
        <div>
          <StyledBox isOpen={isOpen}>
            <div>
              <h1>this is div1</h1>
            </div>
          </StyledBox>
          <StyledBoxTwo isOpen={isOpen}>
            <div>
              <h1>this is div2</h1>
            </div>
          </StyledBoxTwo>
          <StyledBox isOpen={isOpen}>
            <div>
              <h1>this is div3</h1>
            </div>
          </StyledBox>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Dashboard;
