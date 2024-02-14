import { useParams } from "react-router-dom"    //the hook returns an object of key value pair of the dynamic params of the current URL

export const UserDetails = () => {
    // const {userId} = useParams()     short way of extracting userId from params using destructuring
    const params = useParams()
    const userId = params.userId
    return(
        <div>Details about user {userId}</div>
    )
}