import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const SectorsContext = createContext();
const BrandsContext = createContext();
const OffersContext = createContext();
const AdditionalLoansContext = createContext();

const sectorsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SECTORS":
      return action.payload;
    default:
      return state;
  }
};

const brandsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BRANDS":
      return action.payload;
    default:
      return state;
  }
};

const offersReducer = (state, action) => {
  switch (action.type) {
    case "SET_OFFERS":
      return action.payload;
    default:
      return state;
  }
};

const additionalLoansReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDITIONAL_LOANS":
      return action.payload;
    default:
      return state;
  }
};

export const ApiProvider = ({ children }) => {
  const [sectors, sectorsDispatch] = useReducer(sectorsReducer, []);
  const [brands, brandsDispatch] = useReducer(brandsReducer, []);
  const [offers, offersDispatch] = useReducer(offersReducer, []);
  const [additionalLoans, additionalLoansDispatch] = useReducer(
    additionalLoansReducer,
    []
  );

  useEffect(() => {
    const fetchSector = async () => {
      try {
        const sectorsResponse = await axios.get(
          "https://forsa-staging.bit68.com/api/v1/stores/mysectors/"
        );
        sectorsDispatch({
          type: "SET_SECTORS",
          payload: sectorsResponse.data.results,
        });
      } catch (error) {
        if (__DEV__) {
          console.error("Error fetch Sector data:", error);
        } else return;
      }
    };

    const fetchBrands = async () => {
      try {
        const brandsResponse = await axios.get(
          "https://forsa-staging.bit68.com/api/v1/stores/mystores/?sector=1"
        );
        brandsDispatch({
          type: "SET_BRANDS",
          payload: brandsResponse.data.results,
        });
      } catch (error) {
        if (__DEV__) {
          console.error("Error fetch Brands data:", error);
        } else return;
      }
    };
    const fetchOffers = async () => {
      try {
        const offersResponse = await axios.get(
          "https://forsa-staging.bit68.com/api/v1/stores/myoffers/"
        );
        offersDispatch({
          type: "SET_OFFERS",
          payload: offersResponse.data.results,
        });
      } catch (error) {
        if (__DEV__) {
          console.error("Error fetch Offers data:", error);
        } else return;
      }
    };

    const fetchAdditionalLoans = async () => {
      try {
        const additionalLoansResponse = await axios.get(
          "https://forsa-staging.bit68.com/api/v1/onetransaction/myservicetypes/"
        );
        additionalLoansDispatch({
          type: "SET_ADDITIONAL_LOANS",
          payload: additionalLoansResponse.data.results,
        });
      } catch (error) {
        if (__DEV__) {
          console.error("Error fetching Additional Loans data:", error);
        } else return;
      }
    };

    fetchSector();
    fetchBrands();
    fetchOffers();
    fetchAdditionalLoans();
  }, []);

  return (
    <SectorsContext.Provider value={sectors}>
      <BrandsContext.Provider value={brands}>
        <OffersContext.Provider value={offers}>
          <AdditionalLoansContext.Provider value={additionalLoans}>
            {children}
          </AdditionalLoansContext.Provider>
        </OffersContext.Provider>
      </BrandsContext.Provider>
    </SectorsContext.Provider>
  );
};

export const useSectors = () => useContext(SectorsContext);
export const useBrands = () => useContext(BrandsContext);
export const useOffers = () => useContext(OffersContext);
export const useAdditionalLoans = () => useContext(AdditionalLoansContext);
