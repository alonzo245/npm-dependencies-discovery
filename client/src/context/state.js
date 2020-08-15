import React, { createContext, useReducer } from "react";
import axios from "axios";
import SearchReducer from "./reducer";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

//Create context
export const SearchContext = createContext(initialState);

//Provider
export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  //Actions
  async function searchPackage(packageName = '') {
    try {
      if (!packageName || packageName.trim().length === 0) {
          console.log('RESET_SEARCH', packageName.trim().length);
        dispatch({ type: "RESET_SEARCH" });
        return;
      }

      dispatch({ type: "LOADING" });
      const response = await axios.get(
        `//localhost:3001/api/v1/packages/${packageName}/dependencies`
      );
      dispatch({ type: "DATA_FETCHED", payload: { data: response.data } });

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SearchContext.Provider
      value={{
        loading: state.loading,
        data: state.data,
        error: state.error,
        searchPackage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
