
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from "./pages/splashscreen.tsx"
import Signup from "./pages/signup.tsx"
function App(){
  return(
   
    <BrowserRouter>
     
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="*" element={<Splash />} />

    </Routes>
    </BrowserRouter>
  
   
  )
}
export default App

 