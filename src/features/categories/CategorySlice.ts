import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category {
    id: string;
    name: string;
    description: null|string;
    is_active: boolean;
    deleted_at: null| string;
    created_at: string;
    updated_at: string;
}

const category: Category = {
    id: "123123",
    name: "Name",
    description: "Description name",
    is_active: true,
    deleted_at: null,
    created_at: "2022-08-15T10:00:00Z",
    updated_at: "2022-08-15T10:00:00Z",
};

export const initialState =  [
    category,
    {...category, id: "sdff", name: "Outer name", description: " Description", },
    {...category, id: "sdfg", name: "Inner name", description: "New description" },
    {...category, id: "sdfh", name: "Tor name", description: "Ioenr description" },
    {...category, id: "123g", name: "ter name", description: "sdflkji description" },
    {...category, id: "345d", name: "dfe name", description: "Okjsdife description" },
    {...category, id: "546g", name: "Oudfht name", description: "Oljdie description" },
    {...category, id: "789g", name: "sdfh name", description: "Olkjdie description" },
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        createCategory(state, action) {},
        updateCategory(state, action) {},
        deleteCategory(state, action) {},
    },
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;