import { UseStateHook } from './Components/UseStateHook'
import './App.css'
import { UseEffectHook } from './Components/useEffectHook'
import { ComponentOne } from './Components/comp_1'
import {ComponentTwo} from './Components/comp_2'
import { UseContextHook } from './Components/useContext'


function App() {

  // const [Toggle, setToggleText]= useState(false)
  // console.log(Toggle);

  // function handleToggleText(){
  //   setToggleText(!Toggle)
  // }

  return(
    <div>
      <UseContextHook />
    <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
    {/* <h1>Hello</h1> */}
    {/* <UseStateHook /> */}
    {/* <UseEffectHook /> */}


    <ComponentOne/>
    <ComponentTwo/>

    </div>
    </div>
  )
}

export default App
