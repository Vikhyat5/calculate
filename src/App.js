import React,{Component} from 'react';

import Board from './Board';
import Screen from './Screen';

class App extends Component
{  

   constructor()
   {  super()
      this.state={
          screenscontent:''
      }

      this.screentext=this.screentext.bind(this);
   }

   screentext(sdf)
   {
      
      if(sdf=='C')
      {
         //alert("its clear");
         var cleanstring=" ";
         this.setState({
                      screenscontent:cleanstring
                    });


      }
      else if(sdf=='=')
      {
          
          var inputstring =this.state.screenscontent;
          
          //alert();

            try {
                var out=eval(inputstring);
                }
            catch(err) 
            {
                       this.setState({
                      screenscontent:"you enterd a wrong expression"
                                    });
            }



          this.setState({
                      screenscontent:out
                    });
      }
      else
      {
        var myscreenstring=this.state.screenscontent + sdf;
        
      this.setState({
                      screenscontent: myscreenstring
                    });
      }


      //alert(`hello button clicked ${sdf}`);
      

   }
   render()
   {
      return(
           <div >

              <Screen myscreen={this.state.screenscontent}/>
              <Board onclickfunc={this.screentext} />
              
           </div>
        )
   }
}

export default App;

