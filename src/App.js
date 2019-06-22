import React, { useState } from 'react';
import './App.css';
import BusinessList from "./components/BusinessList/BusinessList"
import SearchBar from "./components/SearchBar/SearchBar"
import Yelp from "./util/Yelp"
import Spinner from './components/Spinner/Spinner';

const App = props => {
  const [businesses, setBusinesses] = useState([]);
  const [buttonText, setButtonText] = useState("Let's go");

  const searchYelp = (term, location, sortBy) => {
    setButtonText("Waiting...")
    Yelp.search(term ,location, sortBy).then(businesses => {
      setBusinesses(businesses);
      setButtonText("Let's go")
    })
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar buttonState={buttonText} searchYelp={searchYelp} />
      {buttonText === "Waiting..." ? <Spinner /> : <BusinessList businesses={businesses} />}
    </div>
  );
}

export default App;
