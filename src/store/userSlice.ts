// store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

interface User {
    id: string;
    name: string;
    address: string;
    email: string;
    phone: string;
}

interface UserState {
    userData: User | null;
}

const initialState: UserState = {
    userData: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUserData: (state, action: PayloadAction<Omit<User, "id">>) => {
            state.userData = { ...action.payload, id: nanoid() };
        },
    },
});

export const { saveUserData } = userSlice.actions;

export default userSlice.reducer;
