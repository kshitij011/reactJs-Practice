//Use reducer is similar to useState Hook
//Both of these hooks are used to manage and update state in react application
//Reducer is like having state object with lot of properties and values for state
//And then having a reducer function which takes in that state object along with an action defined in our code
//Based on the action we will perform an action on the state an make a copy of that state which will overwrite and make a new state.
//This is what we call immutibality

//We donot directly make changes to the original state, we create a copy of the state, perform changes and modify the it
//then return the midified state to overwrite the initial state with the help of reducer hook.

import { useReducer } from "react";

function reducer(state, action){  //this function takes two args: state of type 'State' and action of type 'Action'
    const type = action.type

    switch(type){
        case 'increment':{
            const newCount = state.count+1
            const hasError = newCount > 5   //return an error if the value is greater than 5
            return {
                count: hasError? state.count : newCount,
                error: hasError? 'Maximum reached' : null
            }
        }
        case 'decrement':{
            const newCount = state.count-1
            const hasError = newCount < 0
            return {
                count: hasError? state.count : newCount,
                error: hasError? 'Minimum reached' : null
            }
        }
        default:
            return state
    }
}

export const UseReducerHook =()=>{

    //First argument is in <h1>Hello World</h1> useReducer is reducer function, this will take in the state and action(defined in our code) then it will make an copy of the state and perform action based on the action defined, at last it will go into the state variable through useReducer hook
    //second argument is the initial value of the state variable, this initial value is mandatory and not optional
    //dispatch sends plain object(actions) to the reducer i.e: {type: 'increment'}
    const [state, dispatch] = useReducer(reducer, {count:0, error:null})  //useReducer also has third argument which is optional, first is 'state' returned by reducer function, second Parameter passed is the initial state of the variable

        console.log('Hello');
    return (

        <div className='tutorial'>
            <div>Count: {state.count}</div>
            {state.error && <div className='displayError' style={{color: 'red'}}>{state.error}</div>}
            <button className='mb-2' onClick={()=>dispatch({type: 'increment'})}>   {/*when dispatch is called, it sends the action to reducer function in useReducer, reducer will also get the state form the useReducer function(initial value)*/}
                Increment
            </button>
            <button className='mb-2' onClick={()=>dispatch({type: 'decrement'})}>
                Decrement
            </button>
        </div>
    )
}