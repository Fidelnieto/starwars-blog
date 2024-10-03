import { REDUCER_ACTION_TYPES } from "./constants";

export const Reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case REDUCER_ACTION_TYPES.ADD:
      newState[action.payload.key] = action.payload.data;
      return newState;
    case "ADD_FAVORITE":
      const updatedFavoritesAdd = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavoritesAdd));
      return {
        ...state,
        favorites: updatedFavoritesAdd,
      };

    case "REMOVE_FAVORITE":
      const updatedFavoritesRemove = state.favorites.filter(
        (item) => item.uid !== action.payload.uid
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavoritesRemove));
      return {
        ...state,
        favorites: updatedFavoritesRemove,
      };

    case "LOAD_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return state;
  }
};
