//useNavigate Hook is used to navigate programatically
import { useNavigate } from 'react-router-dom'

export const Home =()=>{

    const navigate = useNavigate()

    return(
        <>
        <div>Home Page</div>
        {/* //we replace instead of pushing order summary onto the history stack. Use replace if you want to replace the history*/}
        <button
        onClick={()=>navigate('order-summary', { replace:true})}
        >Place Order</button>
        </>
    )
}