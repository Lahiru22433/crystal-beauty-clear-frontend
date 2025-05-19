import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/loginPage'
import AdminPage from './pages/adminPage'
import Testing from './pages/testing'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/client/register'
import HomePage from './pages/homePage'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ResponsiveTesting from './pages/test'

function App() {

  return (
    <GoogleOAuthProvider clientId="757441254759-m53gmb0691cioob9ofou9t1t1l8c19kb.apps.googleusercontent.com">
    <BrowserRouter>
    <Toaster position="top-right"/>
         <Routes path="/*">
            <Route path="/admin/*" element={<AdminPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="register" element={<RegisterPage/>} />
            <Route path="/r" element={<ResponsiveTesting/>} />
            <Route path="/*" element={<HomePage/>} />
            <Route path="/testing" element={<Testing/>} />
         </Routes>
    
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App
