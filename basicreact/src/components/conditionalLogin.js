//conditional rendering

export const LoggedIn = () =>{
    const LoggedIn = true
    return(
        <div>
            {/* Welcome {LoggedIn?'Comp':"Guest"} */}

            {/* short circuit operator: if we want to display something or nothing at all  */}
            {/* If LoggedIn is true Comp will be executed, if false it will not be executed */}
            Welcome {LoggedIn && 'Comp'}
        </div>
    )
}