import axios from "axios";
import {
  SET_SECTORS,
  SET_BRANDS,
  SET_OFFERS,
  SET_ADDITIONAL_LOANS,
} from "./actionsTypes";

export const fetchData = async (endPoint, action, dispatch) => {
  try {
    const fetchedData = await axios.get(
      `https://forsa-staging.bit68.com/api/v1/${endPoint}`
    );
    switch (action) {
      case SET_SECTORS:
        dispatch({
          type: SET_SECTORS,
          payload: fetchedData.data.results,
        });

        break;
      case SET_BRANDS:
        dispatch({
          type: SET_BRANDS,
          payload: fetchedData.data.results,
        });

        break;
      case SET_OFFERS:
        dispatch({
          type: SET_OFFERS,
          payload: fetchedData.data.results,
        });

        break;
      case SET_ADDITIONAL_LOANS:
        dispatch({
          type: SET_ADDITIONAL_LOANS,
          payload: fetchedData.data.results,
        });

        break;
      default:
        break;
    }
  } catch (error) {
    if (__DEV__) {
      console.log(error.message);
    }
  }
};
