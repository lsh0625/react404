import React from "react";
import Student from "./Student";
function List(props){
return(
<div>
    <Student name="홍기동" major="경영학과" />
    <Student name="박성언" major="컴공" />
    <Student name="유다인" major="멀티미디어" />
</div>
);
}
export default List;