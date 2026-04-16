
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from "./pages/splashscreen.tsx"
import Signup from "./pages/signup.tsx"
import Login from "./pages/login.tsx"
function App(){
  return(
   
    <BrowserRouter>
     
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="*" element={<Splash />} />

    </Routes>
    </BrowserRouter>
  
   
  )
}
export default App

 