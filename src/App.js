import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Message from './components/Message';
import NotFound from './components/NotFound'
import News from './components/News'

function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/message' component={Message}/>
        <Route path='/news' component={News}/>  
        <Route component={NotFound}/>
      </Switch>
    </Router>
    </>
    );
  }
  
  export default App;
  
  // <div className="App">
  //   <News />
  //   <Home/>
  //   <Contact />
  //   <Message />
  // </div>