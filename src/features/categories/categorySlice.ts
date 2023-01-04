import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category {
  id: string;
  title: string;
  description: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}

const category: Category = {
  id: "0",
  title: "F",
  description: "ce loco",
  is_active: true,
  created_at: "2023-01-02T10:59:09+0000",
  updated_at: "2023-01-02T10:59:09+0000",
  deleted_at: null
};


export const initialState = [
  category,
  {...category, id: "1", title: "Filmes"},
  {...category, id: "2", title: "Séries"},
  {...category, id: "3", title: "Animes"},
  {...category, id: "4", title: "Infantil"},
  {...category, id: "5", title: "Documentarios"},
  {...category, id: "6", title: "Reality Show"},
  {...category, id: "7", title: "Banana"},
]


const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  }
})

// Selectors
export const selectCategories = (state: RootState) => state.categories;
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id === id);
  return category || {
    id: "",
    title: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: ""
  };
}


export default categoriesSlice.reducer;