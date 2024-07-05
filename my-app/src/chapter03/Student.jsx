import React from "react";
function Student(props){
    return(
        <div>
            <h1>{`${props.name} 학생의 전공은 ${props.major}입니다`}</h1>
        </div>
    );
}
export default Student;