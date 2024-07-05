import React,{useState} from "react";
function EventPractice(props){
    const [form,setForm]=useState({
        username:'',
        message:''
});
    
const {username,message}=form;
    const onChange=e=>{
        const nextForm={
            ...form,
            [e.target.name]:e.target.value
        };
        setForm(nextForm)
    };
    const onClick=()=>{
        alert(message);
        setForm({username:'',messge:''});
    }
    
    return(
        <div>
            <h1>
                이벤트실습
            </h1>
            <input 
            type="text"
            name="username"
            placeholder="사용자명을 입력하세요"
            onChange={onChange}
            value={username}/>
            <input type="text"
            name="message"
            placeholder="아무거나 이력해 보세요"

            onChange={onChange}
        value={message}/>
        <h1>message</h1>
        <button onClick={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;