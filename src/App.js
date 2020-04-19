import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Provider } from './context';
import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index';
import Lyrics from './components/tracks/Lyrics';

function App() {
    return (
        <Provider>
            <Router>
                <>
                    <Navbar />
                    <div className = "container">
                        <Switch>
                            <Route path = "/" exact component = {Index} />
                            <Route path = "/lyrics/track/:id" component = {Lyrics} />
                        </Switch>
                    </div>
                </>
            </Router>
        </Provider>
    )
}

export default App;
