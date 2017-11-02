import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YouTubeSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCfwzQJXy0dBe_wt7C95lJ3d-SX7Pq9l7Y';

YouTubeSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data)
});

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
