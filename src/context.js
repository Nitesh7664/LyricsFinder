import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (action, state) => {
    switch(action.type){
        case 'SEARCH_TRACKS':
            return ({
                ...state,
                track_list: action.payload,
                heading: 'Search Results...'
            });
        default: return(state);
    }
}

export class Provider extends Component {
    state = {
        track_list: [],
        heading: "Top 10 songs",
        dispatch: action => this.setState(state => reducer(action, state))
    }
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=c7e9454d8f1738098c2fab1206f980f7`)
        .then(res => {
            this.setState({
                track_list: res.data.message.body.track_list
            })
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
};

export const Consumer = Context.Consumer;
