import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Footer from './Components/Layout/Footer/footer.js';
import Navbar from './Components/Layout/Navbar/nav.js';
import Store from './Components/Pages/Store/store.js';



function App()
{
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" />
            <Route path="/store"element={<Store/>} />
        </Routes>

       
        <Footer/>
      </BrowserRouter>
    );
}


export default App;
