import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

import _ from 'lodash';

class postsList extends Component{
  
  // this function will be called automatically when component render to the page
  componentDidMount(){
    this.props.fetchPosts();
  }

  //loop through the array of objects
  listPosts(){
    return _.map(this.props.posts, (post)=>{
      return(
        <a href="#" key={post.id} className="list-group-item list-group-item-action">{post.title}</a>
      )
    })
  }

  render(){
    return(
      <div className="list-group">
      {this.listPosts()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(postsList);
