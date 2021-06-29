import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TrendingScreen from './screens/Trending/TrendingScreen'
import MoviesScreen from './screens/Movies/MoviesScreen'
import SearchScreen from './screens/Search/SearchScreen'
import TVSeriesScreen from './screens/TVSeries/TVSeriesScreen';

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
