import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Error/error';
import Main from '../Main/Main';
import HomePage from './Home/HomePage';

const RouterView = () => {
    return <Routes>
        <Route path='/online-shop-react' element={<HomePage/>}/>
        <Route path='/catalogue' element={<Main/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
}

export default RouterView;