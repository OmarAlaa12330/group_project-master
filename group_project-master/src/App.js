import Preview from "./Preview";
import "./App.css";
//import photo from "./Juan.jpg";
import data from "./test.json";

function App() {
  return (
    <div className="App">
      <div>
        <Preview data={data} />
      </div>
      hello
    </div>
  );
}

export default App;
