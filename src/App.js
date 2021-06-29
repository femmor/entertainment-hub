import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TrendingScreen from './screens/TrendingScreen'
import MoviesScreen from './screens/MoviesScreen'
import SearchScreen from './screens/SearchScreen'
import TVSeriesScreen from './screens/TVSeriesScreen';

const App = () => {
  return (
    <Router>
        <Header/>
          <div className="app">
            <Route component={TrendingScreen} exact path="/"/>
            <Route component={MoviesScreen} path="/movies"/>
            <Route component={SearchScreen} path="/search"/>
            <Route component={TVSeriesScreen} path="/tv-series"/>
          </div>
        <Footer/>
    </Router>
  );
}

export default App;
