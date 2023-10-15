import logo from './logo.svg';
import {Navbar} from './component/Navbar'
import {Routess} from  './component/Routess'
import {Footer} from './component/Footer'
import { useState } from 'react';
function App() {
   const[darkThem ,  setdarkThem] =  useState(false)
  return (
    <div className={darkThem ? 'dark' : ''}>
          <div className=' bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
            <Navbar darkThem={darkThem} setdarkThem={setdarkThem}/>
            <Routess/>
            <Footer/>
          </div>
    </div>
  );
}

export default App;
 