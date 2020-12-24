import React from 'react';
import Movie from '../components/Movie';
import '../components/Movie.css';

class Detail extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        const {location, history} = this.props;
        console.log(location);
        if(location.state === undefined){
            history.push("/");
        }
    };

    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <div style={{textAlign:'center'}}>
                    <Movie 
                      key={location.state.id}
                      id={location.state.id} 
                      title={location.state.title} 
                      summary={location.state.summary} 
                      year={location.state.year} 
                      poster={location.state.poster}
                      genres={location.state.genres}
                      rating={location.state.rating}/>
                </div>
              );
        } else {
            return null;
        }
    };

};

export default Detail;