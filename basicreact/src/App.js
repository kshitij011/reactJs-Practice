import {Greet} from "./components/Greet.js"
import {Message} from "./components/Message.js"
import {ClickHandler} from "./components/ClickHandler.js"
import {ParentComponent} from "./components/ParentComponent.js"

function App() {
  return (
    <>  {/*In jsx only one element can be returned to we wrap all the tags to be exported in one tag before exporting.*/}
    <h1>This is my Classic react app.</h1>
    <h2>This is second element</h2>
    <Greet name = "comp1" os="Windows"/>
    <Greet name ="comp2" os="Apple">
      <button>Action</button>
    </Greet>
    <Greet name="comp3" os="Linux">
      <p>This is child prop</p>
    </Greet>
    <Message/>

    <ClickHandler />

    <ParentComponent />
    </>
  );
}

export default App;
