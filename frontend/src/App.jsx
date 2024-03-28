import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Showbook from '../pages/Showbook'
import Editbook from '../pages/Editbook'
import Createbook from '../pages/Createbook'
import Deletebook from '../pages/Deletebook'
import 'tailwindcss/tailwind.css';


const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/books/create' element={<Createbook/>}></Route>
    <Route path='/books/delete/:id' element={<Deletebook/>}></Route>
    <Route path='/books/edit/:id' element={<Editbook/>}></Route>
    <Route path='/books/details/:id' element={<Showbook/>}></Route>

   </Routes>
  )
}

export default App