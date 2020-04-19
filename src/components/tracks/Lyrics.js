import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Spinner from '../layouts/Spinner';

class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=c7e9454d8f1738098c2fab1206f980f7`)
        .then(res => {
            this.setState({
                lyrics: res.data.message.body.lyrics
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        const { track, lyrics } = this.state;
        if(track === undefined || Object.keys(lyrics).length === 0){
            return <Spinner />
        }
        else{
            return(
                <React.Fragment>
                    <Link to = "/" className = "btn btn-dark btn-sm mb-4">
                        Go Back
                    </Link>
                    <div className = "card">
                        <h3 className = "card-header">Lyrics</h3>
                        <div className = "card-body">
                            <p className = "card-text">{ lyrics.lyrics_body}</p>
                        </div>
                    </div>

                </React.Fragment>
            );
        }
    }
}

export default Lyrics;