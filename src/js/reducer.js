import { REDUCER_ACTION_TYPES } from "./constants";

export const Reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_FAVORITE":
      if (
        !state.favorites.some((fav) => fav.uniqueId === action.payload.uniqueId)
      ) {
        const updatedFavoritesAdd = [...newState.favorites, action.payload];
        localStorage.setItem("favorites", JSON.stringify(updatedFavoritesAdd));
        return {
          ...newState,
          favorites: updatedFavoritesAdd,
        };
      }
      return state;

    case "REMOVE_FAVORITE":
      const updatedFavoritesRemove = state.favorites.filter(
        (item) => item.uniqueId !== action.payload.uniqueId
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
