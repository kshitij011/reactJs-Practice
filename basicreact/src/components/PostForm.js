import { useState } from "react"

export const PostForm = () => {
    const[userId, setUser] = useState('')
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')

    const submitHandler =(event)=>{
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId
            }),
            headers:{
                'Content-type': 'application/json; charset =UTF-8'
            }
        })
        .then(response =>response.json())
        .then(json => console.log(json))
    }
    return (<form onSubmit={submitHandler}>
        <div>
            <input
            type="text"
            placeholder="User Id"
            value ={userId}
            onChange = {e=> setUser(e.target.value)}
            />
        </div>
        <div>
            <input
            type="text"
            placeholder="Title"
            value ={title}
            onChange = {e=> setTitle(e.target.value)}
            />
        </div>
        <div>
            <input
            type="text"
            placeholder="Body"
            value ={body}
            onChange = {e=> setBody(e.target.value)}
            />
        </div>
        <button type="submit">Submit</button>
    </form>
)}