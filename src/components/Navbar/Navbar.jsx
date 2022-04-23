import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 60px;
  background-color: #00073d;
  color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Navbar({ isOpen, setIsOpen }) {
  const toggleThis = () => setIsOpen(!isOpen);
  return (
    <>
      <StyledNavbar>
        <div className="top_section">
          <div className="bars">
            <FaBars
              onClick={() => {
                toggleThis();
              }}
            />
          </div>
          <div>Logo</div>
        </div>

        <div>Connect</div>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
