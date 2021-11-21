import React, { useEffect, useState } from "react"
import "./chat.css"
import axios from "axios"

const Chat = ({uid}) => {

    const [msg,setMsg]=useState("")
    const [chats , setChats]= useState([])

    useEffect(()=>{
        getMsg()
    },[])
     
    const handleChange = e => {
        // console.log(e.target.value)
        setMsg(e.target.value)
        // console.log(msg)
    }
    const onSend = ()=>{
        
         uid=3456
        const reply =""
        const message ={
            uid,
            msg,
            reply,
        }
        axios.post("http://localhost:8000/api/main/msg", message)
        .then(res => {
            setChats([...chats,msg])
            setMsg("")
           
        })
    }

     const getMsg = ()=>{
        const uid=3456
        axios.get(`http://localhost:8000/api/main/msg/${uid}`)
        .then(res => {
            
            const messages = res.data.msg
            const msgArray = []
            messages.map((message)=>{
               // console.log(message.msg)
                msgArray.push(message.msg)
            })
            console.log(msgArray)
            setChats(chats.concat(msgArray))
                     
        })
    }

    return (
        <div className="chat-view">
            <div className='chat-box'>
                <input type='text' value={msg} onChange={handleChange}></input>
                <button onClick={onSend}>Send</button>
            </div>
            <div className='chat-list'>
                
                    {chats.map(chat=>(<div className='chat-item'>{chat}</div>))}
                       {/* <div className='chat-item'>{chats[1]}</div> */}
                  
                
            </div>
            
        </div>
    )
}

export default Chat