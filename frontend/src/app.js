import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import ViewMain from './views/viewMain'
import ViewPost from './views/viewPost'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Route exact path="/" component={ViewMain} />
                    <Route exact path="/category/:category" component={ViewMain} />
                    <Route exact path="/new" component={ViewPost} />
                    <Route exact path="/posts/:id" component={ViewPost} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;