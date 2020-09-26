import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "../../../axios";

import './Posts.css';
import {Route} from "react-router";
import FullPost from "../FullPost/FullPost";

// import {Link} from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount() {
    axios.get('/posts')
        .then((response) => {
          const posts = response.data.slice(0, 4);
          const updatedPosts = posts.map(posts => {
            return {
              ...posts,
              author: 'JV'
            }
          });
          this.setState({posts: updatedPosts});
        })
        .catch(() => {
          this.setState({error: true});
        });
  }

  postSelectedHandler = (id) => {
    this.props.history.push(this.props.match.url + '/' + id);
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

    if (!this.state.error)
      posts = this.state.posts.map((p) =>
              // <Link key={p.id} to={'/' + p.id}>
              <Post key={p.id} title={p.title}
                    author={p.author} clicked={() => this.postSelectedHandler(p.id)}/>
          // </Link>
      );
    return (
        <div>
          <section className="Posts">
            {posts}
          </section>
          <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
        </div>
    );
  }
}

export default Posts;
