import { Outlet, useSearchParams } from "react-router-dom"  //useSearchParams hook stores the state in URL instead of saving the state in memory

export const Users =()=>{
    const [searchParams, setSearchParams] = useSearchParams()   //using this we can add or remove the parameter
    const showActiveUsers = searchParams.get('filter') === 'active'
    return(
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <Outlet />

            <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
            <button onClick={()=>setSearchParams({})}>All Users</button>

            {
                showActiveUsers ? (<h2>Showing Active Users</h2>) : (<h2>Showing All Users</h2>)
            }

        </div>
    )
}