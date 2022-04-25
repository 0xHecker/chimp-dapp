import React from "react";
import { FaBars, FaStream } from "react-icons/fa";
import StyledBtn from "./Button.Styled";
import StyledNavbar from "./Navbar.Styled";
import { useState } from "react";
import { ethers } from "ethers";
import ModalElement from "../Modal/Modal";
import addChain from "../../AddChain";

function Navbar({ isOpen, setIsOpen }) {
  const toggleThis = () => setIsOpen(!isOpen);
  const [walletAddress, setWalletAddress] = useState("NA");
  const [isConnected, setIsConnected] = useState(false);

  async function requestAccount() {
    console.log("Requesting account...");

    if (window.web3) {
      try {
        const selectedAccount = await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((accounts) => accounts[0])
          .catch(() => {
            throw Error("No account selected!");
          });

        window.userAddress = selectedAccount;
        window.localStorage.setItem("userAddress", selectedAccount);
        setWalletAddress(selectedAccount);
        setIsConnected(true);
        console.log("Account selected:", selectedAccount);
        //  addChain();
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("No ETH brower extension detected.");
    }
  }

  function logout() {
    window.localStorage.removeItem("userAddress");
    setWalletAddress("NA");
    setIsConnected(false);
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      var provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  function loginbtn() {
    return (
      <StyledBtn className="loginBtn" onClick={connectWallet}>
        {isConnected &&
          walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4)}
        {!isConnected && "Connect "}
      </StyledBtn>
    );
  }

  return (
    <>
      <StyledNavbar>
        <div className="top_section">
          <div className="bars">
            {(!isOpen && (
              <FaBars
                style={{ cursor: "pointer" }}
                onClick={() => {
                  toggleThis();
                }}
              />
            )) || (
              <FaStream
                style={{ cursor: "pointer" }}
                onClick={() => {
                  toggleThis();
                }}
              />
            )}
          </div>
          <div>
            <h1>Chimp DeFi</h1>
          </div>
        </div>
        <ModalElement
          loginbtn={loginbtn()}
          walletAddress={walletAddress}
          isConnected={isConnected}
          logout={logout}
        />
      </StyledNavbar>
    </>
  );
}

export default Navbar;
