import React, { createContext, useReducer } from 'react';

// Action types
export const actionTypes = {
  ADD_TO_FAVOURITE: 'ADD_TO_FAVOURITE',
  REMOVE_FROM_FAVOURITE: 'REMOVE_FROM_FAVOURITE',
};

// Initial state
const initialState = {
  favourites: [],
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVOURITE:
      return { ...state, favourites: [...state.favourites, action.payload] };
    case actionTypes.REMOVE_FROM_FAVOURITE:
      return { ...state, favourites: state.favourites.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToFavourite = (item) => {
    dispatch({ type: actionTypes.ADD_TO_FAVOURITE, payload: item });
  };

  const removeFromFavourite = (id) => {
    dispatch({ type: actionTypes.REMOVE_FROM_FAVOURITE, payload: id });
  };

  return (
    <FavouriteContext.Provider value={{ state, addToFavourite, removeFromFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

