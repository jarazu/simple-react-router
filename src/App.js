import { BrowserRouter as Router,  Switch, Route} from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';

function App() {

  return (
    <div className="App">
        <Router>
          
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/friends">
              <Friends></Friends>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route path="/friend/:friendId">
              <FriendDetail></FriendDetail>
            </Route>
            <Route path="/about/culture">
              <Culture></Culture>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

      // <Home/>
      // <Friends/>
      // <About/>
      // <NotFound/>
