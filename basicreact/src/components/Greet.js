export const Greet = (props) =>{
    return(
        <div>
            <h1>Hello world, hi {props.name} your OS is {props.os}</h1>
            {props.children}
        </div>
    )
}

