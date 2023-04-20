import { createContext, useContext, useState } from "react";

const GlobalStates = createContext();

const Context = ({ children }) => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);


  const handleOpenModal1 = () => {
    setIsOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsOpen1(false);  
  };

  const handleOpenModal2 = () => {
    setIsOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsOpen2(false);
  };

  const handleOpenModal3 = () => {
    setIsOpen3(true);
  };

  const handleCloseModal3 = () => {
    setIsOpen3(false);
  };


return (
    <GlobalStates.Provider
    value={{
      isOpen1,
      handleOpenModal1,
      handleCloseModal1,

      isOpen2,
      handleOpenModal2,
      handleCloseModal2,

      isOpen3,
      handleOpenModal3,
      handleCloseModal3,
    }}
    >
      {children}
    </GlobalStates.Provider>
  );
};
export default Context;

export const useGlobalStates = () => useContext(GlobalStates);