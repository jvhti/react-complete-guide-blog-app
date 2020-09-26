import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "../../../axios";

import './Posts.css';

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
    this.setState({selectedPostId: id});
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

    if (!this.state.error)
      posts = this.state.posts.map((p) =>
          <Post key={p.id} title={p.title}
                author={p.author} clicked={() => this.postSelectedHandler(p.id)}/>);
    return (
        <section className="Posts">
          {posts}
        </section>
    );
  }
}

export default Posts;
