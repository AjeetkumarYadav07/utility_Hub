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
import DefaultPage from './Pages/Dashboard/DefaultPage'
import PasswordGenerator from './Pages/Dashboard/PasswordGenerator'
import Mp4ToMp3 from './Pages/Dashboard/Mp4ToMp3'




const App = () => {
  
  return (
    <>
 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-up' element={<RegisterPage/>}  />
        <Route path="/login" element={<LoginPage/>} />

        <Route path='/user-dashboard' element={<DashboardLayout/>}  >
          
              <Route index element={<DefaultPage />} />

           <Route path='word_to_pdf' element={<PdfConverter/>}/>
           <Route path='pdf_to_word' element={<PdfToWord/>} />
           <Route path='url_shortener' element={<Url_Shortener/>} />
           <Route path='text_convert' element={<TextConverter/> } />
           <Route path='passwordGenerator' element={<PasswordGenerator/> } />
           <Route path='mp4_to_mp3' element={<Mp4ToMp3/> } />
           
        </Route>
      </Routes>
    </>
  )
}

export default App