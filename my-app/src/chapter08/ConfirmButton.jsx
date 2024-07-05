import React,{useState} from "react";
function ConfirmButton(props){
    const [isConFirmed, setIsConfirmed]=useState(false);
    const handleConfirm=()=>{
        setIsConfirmed((prevIsComfirmed)=>!prevIsComfirmed);
    }
    return(
        <button onClick={handleConfirm} disabled={isConFirmed}>
            {isConFirmed?"확인됨":"확인하기"}
        </button>
    )
}
export default ConfirmButton;