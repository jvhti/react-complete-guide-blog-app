import React, {Component} from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.setState({posts: response.data});
        });
  }

  render() {
    return (
        <div>
          <section className="Posts">
            {this.state.posts.map((p) => <Post key={p.id} title={p.title}/>)}
          </section>
          <section>
            <FullPost/>
          </section>
          <section>
            <NewPost/>
          </section>
        </div>
    );
  }
}

export default Blog;
