import React, { Component } from 'react';
import PostsList from './postslist';

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="row bg-success text-white">
      Sample React Redux applicaton
      </div>
      <div className="row">
      <PostsList/>
      </div>
      </div>
    );
  }
}
