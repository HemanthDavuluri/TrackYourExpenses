
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
