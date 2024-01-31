import {Greet} from "./components/Greet.js"
import {Message} from "./components/Message.js"
import {ClickHandler} from "./components/ClickHandler.js"
import {ParentComponent} from "./components/ParentComponent.js"
import { LoggedIn } from "./components/conditionalLogin.js"
import {List} from "./components/ListRendering.js"
import { Stylesheet } from "./components/Stylesheets.js"
import { Inline } from "./components/Inline.js"
import './appStyle.css'
import styles from './appStyle.module.css'
import { Form } from "./components/Form.js"
import { PostList } from "./components/PostList.js"
import { PostForm } from "./components/PostForm.js"

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
    <LoggedIn />

    <List />

    <Stylesheet />

    <Inline/>

    <h1 className='error'>error</h1>
    <h1 className={styles.sucess}>sucess</h1>
    <Form/>

    <PostForm/>
    </>
  );
}

export default App;
