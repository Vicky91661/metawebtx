import './App.css'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Chatbot from './pages/Chatbot'
import Dashboard from './pages/Dashboard'
function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/chatbot' element={<Chatbot/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
