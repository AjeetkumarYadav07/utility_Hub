import React from 'react'
import RegisterPage from './Pages/RegisterPage'
import { Routes , Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home/Home'
import DashboardLayout from './layout/DashboardLayout'
import PdfConverter from './Pages/Dashboard/WordToPdf'
import TextConverter from './Pages/Dashboard/Text_Convert'
import PdfToWord from './Pages/Dashboard/PdfToWord'
import Url_Shortener from './Pages/Dashboard/Url_Shortener'




const App = () => {
  
  return (
    <>
 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-up' element={<RegisterPage/>}  />
        <Route path="/login" element={<LoginPage/>} />

        <Route path='/user-dashboard' element={<DashboardLayout/>}  >
           <Route path='word_to_pdf' element={<PdfConverter/>}/>
           <Route path='pdf_to_word' element={<PdfToWord/>} />
           <Route path='url_shortener' element={<Url_Shortener/>} />
           <Route path='text_convert' element={<TextConverter/> } />
        </Route>
      </Routes>
    </>
  )
}

export default App