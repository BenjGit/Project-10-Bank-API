import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { login, fetchUserProfile, updateUserProfile } from '../../services/api';

export const fetchUserThunk = createAsyncThunk('auth/fetchUser', async (token, { rejectWithValue }) => {
      try {
        const data = await fetchUserProfile(token);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
  );

export const loginUserThunk = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
    const res = await login({ email, password });
    return res; 
  }
);

export const updateUserThunk = createAsyncThunk('auth/updateUser', async ({token, firstName, lastName}, { rejectWithValue}) => {
  try {
    const res = await updateUserProfile({token, firstName, lastName})
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            userId: undefined,
        },
        token:null,
        isAuthenticated: false,
    },
    reducers: {
      logout: (state) => {
        state.userData = {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            userId: undefined,
        };
        state.token = null;
        state.isAuthenticated = false;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(loginUserThunk.fulfilled, (state, action) => {
            state.token = action.payload.body.token;
            state.isAuthenticated = true;// Définir isAuthenticated sur true après une connexion réussie
          })
          .addCase(fetchUserThunk.fulfilled, (state, action) => {
            state.userData = action.payload;
          })
          .addCase(updateUserThunk.fulfilled, (state, action) => {
            state.userData.firstName = action.payload.body.firstName;
            state.userData.lastName = action.payload.body.lastName;
          });
    }
})

export const { logout} = authSlice.actions;