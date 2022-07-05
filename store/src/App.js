import React from 'react';
import List from './component/List';
import Add from './component/Add'
import Edit from './component/Edit'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<List />} exact />
        <Route path='/add' element={<Add />} exact/>
        <Route path='/edit/:id' element={<Edit />} exact/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
