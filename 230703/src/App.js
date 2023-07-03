import React from 'react';
import ToDoList from "./components/reducerTodolist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Movies from "./page/movies";
import MovieDetails from "./page/movieDetails";


function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
