import React from "react";
import Leftcontainer from "../container/Leftcontainer";
import Rightcontainer from "../container/Rightcontainer";
class Todolist extends React.Component {
    render (){
        return(
            <div className='container-full-grild'>   
                <div className="row">
                <Leftcontainer/>
                <Rightcontainer/>
                </div>      
          </div>
        )
        
    }
}

export default Todolist;