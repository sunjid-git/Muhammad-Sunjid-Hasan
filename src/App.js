import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/HeaderFooter/Header";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Footer from "./components/HeaderFooter/Footer";
import ContactPage from "./components/Contact/ContactPage";
import Blog from "./components/Blog/Blog";
import BlogCollection from "./components/Blog/BlogCollection";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-collection" component={BlogCollection} />
        <Route path="/contact" component={Contact} />
        <Route path="/contactPage" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
