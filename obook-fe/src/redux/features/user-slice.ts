import IUser from "@/interfaces/user-interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  user_id: "",
  email: "",
  avatar: "",
  firstName: "",
  lastName: "",
  dob: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user_id = action.payload.user_id;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dob = action.payload.dob;
    },
  },
});

const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
export default userReducer;
