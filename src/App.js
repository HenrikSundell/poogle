import "./App.css";
import { useState } from "react";
import { translateMulti } from "./services/translateService";

function App() {
  const [searchBoxText, setSearchBoxText] = useState("");

  const searchBoxChange = (ev) => {
    setSearchBoxText(ev.currentTarget.value);
  };

  const search = (ev) => {
    (async () => {
      const text = await translateMulti(searchBoxText);
      console.log(text);
    })();
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchBoxText}
        onChange={searchBoxChange}
      ></input>
      <button onClick={search}>Search</button>
    </div>
  );
}

export default App;
