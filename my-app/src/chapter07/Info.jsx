import React,{useEffect,useState,useReducer} from "react";
function reducer(state,action){
    return{
   ...state,
   [action.name]:action.value
    };
}
function Info(){
    const [state,dispatch]=useReducer(reducer,{name:'',nickname:''});
    const {name, nickname}=state;
    
    const onChange=e=>{
        dispatch(e.target.value);
    };
    
return(
    <div>
        <div>
            <input name="name" value={name} onChange={onChange}/>
            <input name="nickname" value={nickname} onChange={onChange}/>
        </div>
        <div>
            <div><b>이름:</b>{name}</div>
        </div>
        <div>
            <div><b>닉네임:</b>{nickname}</div>
        </div>
    </div>
)
}
export default Info;