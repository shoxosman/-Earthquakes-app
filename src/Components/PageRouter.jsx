import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../Pages/HomePage';
import EarthquakesDetail from '../Components/EarthquakesDetail'

function PageRouter() {
  return <div>
<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<EarthquakesDetail/>} />
        
    </Routes>
  </div>;
}

export default PageRouter;
