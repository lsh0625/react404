import React from "react";
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggle:true};
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(preveState=>({
            isToggleOn:!preveState.isToggleOn
        }));
    }
    render(){
return(
    <button onClick={this.handleClick}>
        {this.state.isToggleOn?'켜짐':'꺼짐'}
    </button>
);
    }
}
export default Toggle;