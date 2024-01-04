import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "./apiCallFunction";

const dataContext = createContext();

export const ApiProvider = ({ children }) => {
  const [sectors, setSectors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [offers, setOffers] = useState([]);
  const [additionalLoans, setAdditionalLoans] = useState([]);

  useEffect(() => {
    fetchData("stores/mysectors/", setSectors);
    fetchData("stores/mystores/?sector=1", setBrands);
    fetchData("stores/myoffers/", setOffers);
    fetchData("onetransaction/myservicetypes/", setAdditionalLoans);
  }, []);

  return (
    <dataContext.Provider
      value={{
        sectors: sectors,
        brands: brands,
        offers: offers,
        additionalLoans: additionalLoans,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
