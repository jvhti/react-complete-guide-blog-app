import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';

import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import {Redirect} from "react-router";

class Blog extends Component {
  state = {
    auth: false
  };

  render() {
    return (
        <div className="Blog">
          <header>
            <nav>
              <ul>
                <li><NavLink to="/posts" exact>Posts</NavLink></li>
                <li><NavLink to="/new-post">New Post</NavLink></li>
              </ul>
            </nav>
          </header>
          <Switch>
            {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
            <Route path="/posts" component={Posts}/>
            <Redirect from="/" to="/posts"/>
          </Switch>
        </div>
    );
  }
}

export default Blog;
