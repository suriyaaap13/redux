import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const newState = state.filter((element) => {
        return element !== action.payload;
      });
      state = newState;
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
});

console.log(store.getState());

export { store };
export const { addSong, removeSong } = songsSlice.actions;
