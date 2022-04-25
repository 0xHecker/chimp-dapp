import {
  StyledContainer,
  StyledBox,
  StyledBoxTwo,
  StyledBoxOneChild,
} from "./Dashboard.Styled";

const Dashboard = ({ isOpen }) => {
  return (
    <StyledContainer>
      <div>
        <div>
          <StyledBox>
            <StyledBoxOneChild>
              <h1>Info & benefits</h1>
              <div>
                <ul>
                  <li>Buyback Burning Mechanism</li>
                  <li>100% LP locked</li>
                  <li>Wolf Vaults</li>
                  <li>Paladin Audit</li>
                  <li>Vulcano day & APRs Reset</li>
                  <li>Migrator Code Removed</li>
                  <li>For Auto-Liquidity 4%</li>
                  <li>Mobile application</li>
                </ul>
              </div>
            </StyledBoxOneChild>
          </StyledBox>
          <StyledBoxTwo>
            <div>
              <h1>this is div2</h1>
            </div>
          </StyledBoxTwo>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Dashboard;
