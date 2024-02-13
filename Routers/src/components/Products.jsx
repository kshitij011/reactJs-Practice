//React router also helps to switch between a portion of the view inside a page using nested routes

import { Link, Outlet } from "react-router-dom"

export const Products = () => {
    return(
        <>
        <div>
            <input type="search" placeholder="Search Products" />
        </div>
        <nav>
            <Link to='featured'>Featured</Link>     {/*Do not include forward slash for the nested routes */}
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
        </>
    )
}