import Youtube from "./Youtube"
function App() {
  return (
    <>  (//In jsx only one element can be returned to we wrap all the tags to be exported in one tag before exporting.)
    <h1>This is my Classic react app.</h1>
    <h2>This is second element</h2>
    <Youtube />
    </>
  );
}

export default App;
