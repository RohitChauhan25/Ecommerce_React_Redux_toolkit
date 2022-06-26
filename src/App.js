import './App.css';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginNav from './Components/LoginNav';
import Cart, { CartContext } from './Pages/Cart';
import ContextProvider from './contextApi/ContextProvider';


function App() {



  return (
    <>
     <ContextProvider>

    
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}> </Route>
          <Route path="/Shop" element={<Shop />}> </Route>
          <Route path="/LoginNav" element={<LoginNav />}> </Route>
          <Route path="/Detail/:id" element={<Detail />}> </Route>
        

          <Route path="/Cart" element={<Cart />}> </Route>


        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
