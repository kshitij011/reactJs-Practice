export const ChildComponent = (props) =>{
    return(
        <button onClick = {()=>props.greetHandler('comp')}>Greet Parent</button>
    )
}
{/*Passing parameters to the function in parent component using arrow function  */}