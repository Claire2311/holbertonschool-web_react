import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/authSlice";

const initialState = { courses: [] };

const API_BASE_URL = "http://localhost:5173";

const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const response = await axios.get(ENDPOINTS.courses);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    selectCourse: (state, action) => {
      const courseId = action.payload;
      const course = state.courses.find((course) => course.id === courseId);
      course.isSelected = true;
    },
    unSelectCourse: (state, action) => {
      const courseId = action.payload;
      const course = state.courses.find((course) => course.id === courseId);
      course.isSelected = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload.map((course) => ({
          ...course,
          isSelected: false,
        }));
      })
      .addCase(logout, () => {
        return initialState;
      });
  },
});

export const { selectCourse, unSelectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
