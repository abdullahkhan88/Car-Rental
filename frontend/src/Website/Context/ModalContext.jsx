import { createContext, useContext, useState } from "react";

const ModalContext = createContext();


 const ModalProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);  // modal open
  const closeLoginModal = () => setShowLoginModal(false); // modal close

  return (
    <ModalContext.Provider value={{ showLoginModal, openLoginModal, closeLoginModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
