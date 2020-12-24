import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log('construct');
  };
  state = {
    isLoading:true,
    movies:[]
  };
  getMovies = async () =>{

    const {data:{data:{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({isLoading:false});
    this.setState({movies});
    console.log({movies});
  };
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
        
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>

        ):(
          <div className="movies">
            {movies.map(e => {
              return (
                <Movie 
                  key={e.id}
                  id={e.id} 
                  title={e.title} 
                  summary={e.summary} 
                  year={e.year} 
                  poster={e.medium_cover_image}
                  genres={e.genres}
                  rating={e.rating}/>
              )
            })}
          </div>
        ) 
      }
      </section>);
  };
}

export default App;
