import React,{Component} from 'react';
import './mystyle.css';


function Screen(props)
{
    return(<div className="screenboard">
                        <div  className="myscreen">{props.myscreen}</div>
                  </div>)
}



export default Screen;