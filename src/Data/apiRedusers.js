import {
  SET_SECTORS,
  SET_BRANDS,
  SET_OFFERS,
  SET_ADDITIONAL_LOANS,
} from "./actionsTypes";

const sectorsReducer = (state, action) => {
  switch (action.type) {
    case SET_SECTORS:
      return action.payload;
    default:
      return state;
  }
};

const brandsReducer = (state, action) => {
  switch (action.type) {
    case SET_BRANDS:
      return action.payload;
    default:
      return state;
  }
};

const offersReducer = (state, action) => {
  switch (action.type) {
    case SET_OFFERS:
      return action.payload;
    default:
      return state;
  }
};

const additionalLoansReducer = (state, action) => {
  switch (action.type) {
    case SET_ADDITIONAL_LOANS:
      return action.payload;
    default:
      return state;
  }
};

export { sectorsReducer, brandsReducer, offersReducer, additionalLoansReducer };
