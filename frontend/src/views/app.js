import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route, Link, BrowserRouter } from 'react-router-dom'

import ViewMain from '../views/viewMain'
import ViewCategory from '../views/viewCategory'
import ViewNewPost from '../views/viewNewPost'
import ViewPost from '../views/viewPost'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Link to="/main" onClick={this.closeMenu}>
                        <span className="site-menu-title">main</span>
                    </Link>
                    <Link to="/category" onClick={this.closeMenu}>
                        <span className="site-menu-title">category</span>
                    </Link>
                    <Link to="/post" onClick={this.closeMenu}>
                        <span className="site-menu-title">post</span>
                    </Link>
                    <Link to="/newpost" onClick={this.closeMenu}>
                        <span className="site-menu-title">new post</span>
                    </Link>
                    <Redirect exact from="/" to="/main" />
                    <Route exact path="/main" component={ViewMain} />
                    <Route exact path="/category" component={ViewCategory} />
                    <Route exact path="/post" component={ViewPost} />
                    <Route exact path="/newpost" component={ViewNewPost} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;