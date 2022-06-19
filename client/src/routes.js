import React from 'react'
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'


export const useRoutes = isAuthenticated => {
    return (
      <Routes>
        <Route path='/' element={<MainPage props={isAuthenticated}/>}/>
        <Route path='/auth/signin' element={<SignIn/>}/>
        <Route path='/auth/signup' element={<SignUp/>}/>
        <Route path='*' element={<h1>Not found</h1>}/>
      </Routes>
    )
}