import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
//import Headroom from 'react-headroom'
import Error from './components/Error'
import SingleProject from './pages/SingleProject'
import TopBtn from './components/TopBtn';
import Messenger from './components/Messenger';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/posts/:postId">
          <SingleProject />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
      <Messenger />
      <TopBtn />
    </Router>
  );
}

export default App;
