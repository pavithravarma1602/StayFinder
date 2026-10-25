import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export const useCompare = () => useContext(CompareContext);

export function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState([]);

  const isInCompare = (id) => {
    return compareList.some((pg) => pg._id === id);
  };

  const toggleCompare = (pg) => {
    if (isInCompare(pg._id)) {
      setCompareList(compareList.filter((p) => p._id !== pg._id));
    } else if (compareList.length >= 3) {
      alert("You can compare up to 3 PGs at a time.");
    } else {
      setCompareList([...compareList, pg]);
    }
  };

  const clearCompare = () => setCompareList([]);

  return (
    <CompareContext.Provider
      value={{
        compareList,
        isInCompare,
        toggleCompare,
        clearCompare
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}