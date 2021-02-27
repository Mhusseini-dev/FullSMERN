import './App.css';
import {Router, Redirect} from "@reach/router";
import ManagePlayers from "./views/ManagePlayers";
import ManageStatus from "./views/ManageStatus";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Team Manager</h1>
      </nav>
      
      <Router>
        <ManagePlayers path="/players/*"/>
        <ManageStatus path="/status/*"/>
        <Redirect noThrow from="/" to="/players"/>
      </Router>
    </div>
  );
}

export default App;
