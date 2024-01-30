import {useState} from "react"

export const Message = ()=>{
    const [message, setMessage] = useState('Welcome visitor')
    return(
        <>
        <h1>{message}</h1>
        <button onClick={()=>setMessage('Thankyou for subscribing')}>Subscribe</button>
        </>
    )
}

// export default fuction = Message;