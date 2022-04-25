import React from "react";
import Modal from "react-modal";
import StyledBtn from "../Navbar/Button.Styled";
import("./modal.css");

Modal.setAppElement(document.getElementsByClassName("loginBtn"));

function ModalElement({ loginbtn, logout, walletAddress, isConnected }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000000a";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function renderContent() {
    if (!isConnected)
      return (
        <div>
          <h1 className="modal-h1">Connect your wallet</h1>
          <div className="modal-container1">
            <div className="metamask-logo">
              <img src="http://localhost:3000/img/mm.png" alt="metamask" />
            </div>

            <div className="login-btn-connect"> {loginbtn} </div>
          </div>
        </div>
      );
    return (
      <div>
        <h1 className="modal-h1">Your wallet</h1>
        <div className="modal-container1">
          <div>
            <h2 className="modal-h2">
              {walletAddress.slice(0, 5) + "..." + walletAddress.slice(-5)}
            </h2>
          </div>

          <div>
            <button className="btn-logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <StyledBtn onClick={openModal}>
        {isConnected &&
          walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4)}
        {!isConnected && "Connect "}
      </StyledBtn>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {renderContent()}
      </Modal>
    </div>
  );
}

export default ModalElement;
