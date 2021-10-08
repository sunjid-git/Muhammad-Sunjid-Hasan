import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/HeaderFooter/Header";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
