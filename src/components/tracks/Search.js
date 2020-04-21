import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';

class Search extends Component {
    state = {
        trackTitle: ""
    };
    findTrack = (dispatch, e) => {
        e.preventDefault();
        
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=c7e9454d8f1738098c2fab1206f980f7`)
        .then(res => {
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });
            this.setState({ trackTitle: "" })
        }).catch(err => {
            console.log(err);
        })
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                    <div className = "card card-body p-4 mb-5">
                        <h1 className = "display-4 text-center">
                            <i className = "fas fa-music"></i> Search For a Song
                        </h1>
                        <p className = "lead text-center">Get the lyrics for the song</p>
                        <form onSubmit = {this.findTrack.bind(this, dispatch)}>
                            <div className = "form-group">
                                <input type = "text" placeholder = "song title..." className = "form-control form-control-lg mb-4" onChange = {this.onChange} value = {this.state.trackTitle} name = "trackTitle"/>
                            </div>
                            <button type = "submit" className = "btn btn-primary btn-block btn-lg mb-4">Search</button>
                        </form>
                    </div>
                    )
                }
                }          
            </Consumer>
        )
    }
}

export default Search;