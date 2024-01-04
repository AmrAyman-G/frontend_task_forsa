import axios from "axios";

export const fetchData = async (endPoint, setData) => {
  try {
    const fetchedData = await axios.get(
      `https://forsa-staging.bit68.com/api/v1/${endPoint}`
    );
    setData(fetchedData.data.results);
  } catch (error) {
    if (__DEV__) {
      console.log(error.message);
    }
  }
};
