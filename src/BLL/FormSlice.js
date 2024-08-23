import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    {
      id: 1,
      date: new Date().toISOString().split("T")[0],
      author: "Alisher Sauagabayev",
      sum: "1000tg",
      category: "Option 1",
      comment: "First transaction",
    },
    {
      id: 2,
      date: new Date().toISOString().split("T")[0],
      author: "Sergey Nikolin",
      sum: "2000tg",
      category: "Option 2",
      comment: "For IT services",
    },
  ],
};

const FormSlice = createSlice({
  name: "FormSlice",
  initialState,
  reducers: {
    addTransaction: (state = initialState, action) => {
      console.log(action.payload);

      const newTransaction = {
        ...action.payload,
      };
      state.transactions = [newTransaction, ...state.transactions];
    },
  },
});

export const { addTransaction } = FormSlice.actions;

export default FormSlice.reducer;
