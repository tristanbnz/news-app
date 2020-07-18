import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar'
import NewsArticles from './Components/NewsArticles/NewsArticles'
import ISearchParameters from './Common/interfaces'


function App() {

  //Set the initial type of articles to display as the world top headlines
  const [NewsSearchTerm, setNewsSearchTerm] = useState<ISearchParameters>({
      SearchString: "",
      Country: "nz",
  });
  function SetNewsSearchTerm(a: ISearchParameters) {
    setNewsSearchTerm(a);
  }

  return (
    <div>
      <SearchBar SetNewsSearch={(a: ISearchParameters) => SetNewsSearchTerm(a)} />
      <NewsArticles SearchString={NewsSearchTerm.SearchString} Country={NewsSearchTerm.Country} />
    </div>
  );
}

export default App;
