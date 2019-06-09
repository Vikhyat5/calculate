import React,{Component} from 'react';
import './mystyle.css';



/*
function Board(props)
{
	    
}
*/

class Board extends Component
{
	 
    
    	
       vikhyat(abc)
       {
       	   //var lang = ${abc};
           this.props.onclickfunc(abc);
           //alert(abc);            
       }
         
	 render()
       
	{
        var numlist=['0','1','2','3','4','5','6','7','8','9'];
    	var operlist=['+','-','/','*','.'];
    	var explist=['<='];
    	var equalbutton=['='];
    	var clearbutton=['C'];
    
    	return(
                   <div className="Boardbox">
                        {numlist.map(nlist=><button onClick={()=>{this.vikhyat(nlist)}} className="numbutton">{nlist}</button>)}
                        {operlist.map(oplist=><button onClick={()=>{this.vikhyat(oplist)}} className="opbutton">{oplist}</button>)}
                        {explist.map(explist=><button onClick={()=>{this.vikhyat(explist)}} className="expbutton">{explist}</button>)}
                        {clearbutton.map(clbutton=><button onClick={()=>{this.vikhyat(clbutton)}} className="clbutton">{clbutton}</button>)}
                        {equalbutton.map(eqbutton=><button onClick={()=>{this.vikhyat(eqbutton)}} className="eqbutton">{eqbutton}</button>)}
                        


                   </div>
    		)
	}
}



export default Board;