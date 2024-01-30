import {ChildComponent} from "./ChildComponent"

export const ParentComponent = () =>{
    const greetParent= (childname)=>{
        alert(`Hello parent ${childname}`)
    }
    return(
        <ChildComponent greetHandler={greetParent}/>
    )
}