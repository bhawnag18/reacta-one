import React,{Component, useState} from 'react';
import {Childc} from './Child2.js';
import {Childd} from './Child2.js';
import './Child1.css';
export function Childa()
{
  const [show,setShow]=useState(false)
  return(
      <div className='one'>
        <button onClick={()=>setShow(!show)} className='btn1'>To see styling in functional componenet</button>
          {
            show?<Childc></Childc>:null
          }
          
  </div>
  );  
    
}
export class Childb extends Component {
    constructor() {
        super();
       this.state={
           show:false
       }
    }
    showContent() {
        
        this.setState({ show:!this.state.show});
    };

    render() {
        return (
            <div className='one'>
            <button onClick={()=>this.showContent()} className='btn2'>To see styling in class componenet</button>
            <div>
                {this.state.show?<Childd/>:null}
            </div>
            </div>
        );
            
  }
  }







