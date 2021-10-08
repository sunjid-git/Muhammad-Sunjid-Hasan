import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/HeaderFooter/Header";
function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route exact to="/" component={Home} />
        <Route exact to="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
