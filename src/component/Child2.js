import React from "react";
//import PropTypes from 'prop-types';
import './Child2.css';
//import { buildQueries } from "@testing-library/react";

export function Childc()
{
    const inline={
        color:'blue'
    }
    
    return(
        <div className='box1'>
            <h3>This is created using functional Component</h3>
            <p>This is done using external Css</p>
            <p style={inline}>This is done using inline Css</p>
        </div>
    );
}


export class Childd extends React.Component
{
    render()
    {
        const inline={
            color:'blue'
        }
        return(
            <div className='box2'>
            <h3>This is created using class Component</h3>
            <p>This is done using external Css</p>
            <p style={inline}>This is done using inline Css</p>
        </div>
        );
    }
}