import React from "react";
import Board from "./Board"

function BoardList(props){
    return(
        <div>
        <Board imgUrl="aaa.png" title="title1" content="내용1"
        name="홍길동" date={new Date().toDatedString}/>
        
        </div>
    );
}
export default BoardList;