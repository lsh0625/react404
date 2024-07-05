import React,{useState,useEffect,useReducer} from "react";
function reducer(state,action){
    switch(action.type){
        case 'INCREMENT':return{value:state.value+1};
        case 'DECREMENT':return{value:state.value-1};
        default:return state;
    }
}
function Counter(props){
    const [state,dispatch]=useReducer(reducer,{value:0});
    
    return(
        <div>
            <p>
                총<b>{state.value}</b>번 클릭햇습니다
            </p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    );
}
export default Counter;