
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from "./pages/splashscreen.tsx"
import Auth from "./pages/auth"
function App(){
  return(
   
    <BrowserRouter>
     
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/auth' element={<Auth />} />
      <Route path="*" element={<Splash />} />

    </Routes>
    </BrowserRouter>
  
   
  )
}
export default App

 