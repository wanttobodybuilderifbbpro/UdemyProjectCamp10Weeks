import { createSlice } from "@reduxjs/toolkit";
//Redux를 더 쉽게 만들어 주는 것. 


const initialState = {
  movies: [],
};
//  Redux 상태 관리를 간편하게 해주는 도구입니다.
// createSlice 함수를 사용하면 Redux 액션과 리듀서를 하나의 객체 안에 정의할 수 있습니다
// 새로운 객체를 만들 수 있다. createSlice할 경우
const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    updateMoviestore: (state, action) => {
      console.log(action);
      return (state = {
        ...state,
        ...action.payload,  
      });  {/* 실행시킬 것 */}
    },
    resetMoviestore: (state, action) => {
      return initialState;
    },
  },
});

export const { updateMoviestore, resetMoviestore } = MovieSlice.actions;
console.log(MovieSlice.actions);
export default MovieSlice.reducer;
console.log(MovieSlice.reducer);

// toolkit
