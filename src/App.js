import "./App.css";
import { useState } from "react";
import { translateMulti } from "./services/translateService";

function App() {
  const [searchBoxText, setSearchBoxText] = useState("");

  const [currentSearch, setCurrentSearch] = useState("");
  const searchBoxChange = (ev) => {
    setSearchBoxText(ev.currentTarget.value);
  };

  const search = (ev) => {
    (async () => {
      const text = await translateMulti(searchBoxText);
      setCurrentSearch(text);
      //window.location.href = `http://www.google.com/search?q=${text}`;
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
      {currentSearch && <iframe src={`https://www.google.com/search?q=${currentSearch}&igu=1`} width="100%" height="100%" title="search" frameborder="0"></iframe>}
    </div>
  );
}

export default App;
