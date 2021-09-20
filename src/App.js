import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Message from './components/Message';
import NotFound from './components/NotFound'
import News from './components/News'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

function App() {
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/message' component={Message}/>
            <Route path='/news' component={News}/>  
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
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