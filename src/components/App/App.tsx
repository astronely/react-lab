import React from 'react';
import 'normalize.css';
import './App.module.scss';
import {Main} from '../Main/Main';
import {Routes, Route} from 'react-router-dom';
import MovieInfo from '../MovieComponents/MovieInfo/MovieInfo';
import MovieEdit from '../MovieComponents/MovieEdit/MovieEdit';
import Movie from '../MovieComponents/Movie/Movie';

function App() {
  return (
    <Routes>
      <Route element={<Main />} path={'/*'}>
        <Route path={'movie/:id'} element={<MovieInfo />}></Route>
        <Route path={'movie/:id/edit'} element={<MovieEdit />}></Route>
        <Route path={'movie/create'} element={<MovieEdit />}></Route>
        <Route path={'movie'} element={<Movie />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
