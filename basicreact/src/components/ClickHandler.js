//Event Handaling

export const ClickHandler = () => {
    const clickHandler = (event, count= 1) =>{
        console.log('Button clicked', count);
    }
    return(
        <>
        <button onClick = {clickHandler} >Click me!</button> {/*In jsx we have to pass an event handler rather than a string.*/}
        <button onClick = {(event)=>{clickHandler(event, 5)}} >Click me! 5</button>
        </>
    )
}