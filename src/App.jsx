
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage.jsx'
import LoginPage from './pages/loginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'
import AdminPage from './pages/adminPage.jsx'
import TestPage from './pages/testPage.jsx'

function App() {

  return (
    
    <BrowserRouter>
      <div className="w-full h-screen flex justify-center items-center bg-blue-300">

          <Routes path="/">
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/admin/*" element={<AdminPage/>}/>
            <Route path="/test" element={<TestPage/>}/>
          </Routes>
        
      </div>
    </BrowserRouter>
  
  )
}

export default App
