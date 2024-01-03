import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  SET_SECTORS,
  SET_BRANDS,
  SET_OFFERS,
  SET_ADDITIONAL_LOANS,
} from "./actionsTypes";
import {
  sectorsReducer,
  brandsReducer,
  offersReducer,
  additionalLoansReducer,
} from "./apiRedusers";
import { fetchData } from "./apiCallFunction";

const dataContext = createContext();

export const ApiProvider = ({ children }) => {
  const [sectors, sectorsDispatch] = useReducer(sectorsReducer, []);
  const [brands, brandsDispatch] = useReducer(brandsReducer, []);
  const [offers, offersDispatch] = useReducer(offersReducer, []);
  const [additionalLoans, additionalLoansDispatch] = useReducer(
    additionalLoansReducer,
    []
  );

  useEffect(() => {
    fetchData("stores/mysectors/", SET_SECTORS, sectorsDispatch);
    fetchData("stores/mystores/?sector=1", SET_BRANDS, brandsDispatch);
    fetchData("stores/myoffers/", SET_OFFERS, offersDispatch);
    fetchData(
      "onetransaction/myservicetypes/",
      SET_ADDITIONAL_LOANS,
      additionalLoansDispatch
    );
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
