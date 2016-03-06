import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "Put your YouTube API key here";

//Class-based component. Used if added functionality is needed.
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        videos : [],
        selectedVideo: null
    };

    var intro = ['Baywatch Intro Season 3', 'Im Always Here (Baywatch OST) HQ', 'REO Speedwagon - Roll With the Changes vevo']
    this.videoSearch(intro[_.random(0, 2)]);
  }

  videoSearch(searchTerm){
      YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        }); // this.setState({ videos: videos });
      });
  }

  render(){
    //Debounce takes inner function and returns a new function that can only be called every 50 milliseconds.
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 50);

    return (
             <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                  onVideoSelect={(Video) => this.setState({selectedVideo:Video}) }
                  videos={this.state.videos} />
             </div>
           );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
