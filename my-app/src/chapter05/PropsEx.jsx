import React from "react";
function Welcome(props) {
 
    return (<h1>hi,{props.name}</h1>);
}

// class CalssWelcome extends React.Component{
//     render(){
//         return <h1>hi,{this.props.name}</h1>
//     }
// }
function PropsEx(props){
   return(
   <div>
        <Welcome name="소플"/>
    </div>
   );
}
export default PropsEx;