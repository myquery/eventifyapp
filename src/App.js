import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import PriceList from './routes/PriceList';
import Faq from './routes/Faq';
import Contacts from './routes/Contacts';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/PriceList' element={<PriceList />} />
      <Route path='/Faq' element={<Faq />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
    </>
  );
}

export default App;
