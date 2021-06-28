import './App.css';
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductListing from "./Components/ProductList/ProductList";
function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
            <Route exact path="/" component={ProductListing}/>
            <Route path="/" exact component={ProductListing}/>
            <Route path="/" exact component={ProductListing}/>
            <Route path="/" exact component={ProductListing}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
