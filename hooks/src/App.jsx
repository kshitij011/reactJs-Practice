import { UseStateHook } from './Components/UseStateHook'
import './App.css'
import { UseEffectHook } from './Components/useEffectHook'
import { ComponentOne } from './Components/comp_1'
import {ComponentTwo} from './Components/comp_2'
import { UseContextHook } from './Components/useContext'
import { UseReducerHook } from './Components/useReducerHook'
import { UseMemoHook } from './Components/useMemoHook'
import { UseRefHook } from './Components/useRefHook'


function App() {

  // const [Toggle, setToggleText]= useState(false)
  // console.log(Toggle);

  // function handleToggleText(){
  //   setToggleText(!Toggle)
  // }

  return(
    <div>

    {/* <h1>Hello</h1> */}
    {/* <UseStateHook /> */}
    {/* <UseEffectHook /> */}

    {/* <UseContextHook />
    <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
      <ComponentOne/>
      <ComponentTwo/>
    </div> */}

    {/* <UseReducerHook/> */}

    {/* <UseMemoHook/> */}

    <UseRefHook/>


    </div>
  )
}

export default App
