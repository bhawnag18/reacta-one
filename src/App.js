import React from 'react';
import {Childa} from './component/Child1.js';
import {Childb} from './component/Child1.js';
import './App.css';
export function App()
{
    return(
        <>
           <div className='style'><h1>Styling using Functional and Class Component</h1></div>
           <div className='main'>
           <Childa/>
           <Childb/>
           </div>
        </>
      
    );
}