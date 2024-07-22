// Event handlers
import './App.css'

function App() {

  const handleClick = () => {
    console.log("Button clicked!");
  }

  const handleSubmit = (e) => {
    e.preventDefault()  // prevents page from reloding
    console.log("Form submitted");
  }

  const handleTextChange = () => {
    console.log(e.target.value);
  }

  return (
    <>
      <div className="App">
        <button onClick={handleClick}>Do something</button>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <input type='text' onChange={handleTextChange}></input>
        {/* inline arrow function
            <input type='text' onChange={(e) => console.log(e.target.value)}></input>*/}
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
