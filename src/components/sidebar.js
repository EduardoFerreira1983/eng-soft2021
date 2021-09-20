import React, { Component } from 'react'

class Sidebar extends Component{
 
    render() //  método obrigatório
    { // quando o componente for renderizado,
       
         
        return (//é esse código do return que será exibido
            <div className="h-48 w-32 bg-green-200"> 
                <h1>Sidebar</h1>
            </div>
        )
    }
}

export default Sidebar; // obrigatório