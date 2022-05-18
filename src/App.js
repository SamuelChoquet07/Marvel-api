import Main from "./pages/Main";
import "./App.css";
import CharacterState from "./context/CharacterState";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <CharacterState>
      <div className="App">
        <Router>
          <Main />
        </Router>
      </div>
    </CharacterState>
  );
}
export default App;
