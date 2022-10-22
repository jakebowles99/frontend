// App.js 

import { useState } from 'react';
// import Calendar from 'react-calendar';
import Quotes from "./Quotes/Quotes";
import Search from "./Search/Search";
import Calendar from "./Calendar/Calendar";
import FillingsAndTranscripts from "./FillingsAndTranscripts/FillingsAndTranscripts";
import NewsAndEvents from "./NewsAndEvents/NewsAndEvents";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="search-container">
        <Search />
      </div>
      <div className="columns-container">
        <div className="left-column">
          <Quotes />
          <FillingsAndTranscripts />
        </div>
        <div className="right-column">
          <Calendar />
          <NewsAndEvents />
        </div>
      </div>
    </div>
  );
}

// export default App;