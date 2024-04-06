import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ThoughtState {
  negativeThought: string | null;
  positiveThought?: string | null;
}

const initialState: ThoughtState = {
  negativeThought: null,
  positiveThought: null,
};

export const thoughtSlice = createSlice({
  name: "thought",
  initialState,
  reducers: {
    setNegativeThought: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        localStorage.setItem(
          "negativeThought",
          JSON.stringify({
            negativeThought: action.payload,
          })
        );
        state.negativeThought = action.payload;
      }
    },
    setPositiveThought: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        localStorage.setItem(
          "positiveThought",
          JSON.stringify({
            positiveThought: action.payload,
          })
        );
        state.positiveThought = action.payload;
      }
    },
    maintainThoughtsDataStoredinRedux: (state) => {
      if ("negativeThought" in localStorage) {
        const negativeThought = JSON.parse(
          localStorage.getItem("negativeThought") || "{}"
        );
        if (negativeThought) {
          state.negativeThought = negativeThought.negativeThought;
        }
      }
      if ("positiveThought" in localStorage) {
        const positiveThought = JSON.parse(
          localStorage.getItem("positiveThought") || "{}"
        );
        if (positiveThought) {
          state.positiveThought = positiveThought.positiveThought;
        }
      }
    },
    eliminateThoughtsDataStoredinRedux: (state) => {
      localStorage.removeItem("negativeThought");
      state.negativeThought = null;
      localStorage.removeItem("positiveThought");
      state.positiveThought = null;
    },
  },
});

export const selectThought = (state: RootState) => state.thought;

export const {
  setNegativeThought,
  setPositiveThought,
  maintainThoughtsDataStoredinRedux,
  eliminateThoughtsDataStoredinRedux,
} = thoughtSlice.actions;

export default thoughtSlice.reducer;
