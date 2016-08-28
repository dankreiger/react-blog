import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';


class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });;
  }

  render () {
    const { post } = this.props;
    // same as
    // const props = this.props.post;

    if(!post) {return <div></div>;}
    else if(this.props.params.id!=post.id){return <div></div>;}

    return (
      <div>
        <div className="row">
          <Link to="/" id="back-to-index-link">Back To Index</Link>
          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}>
            Delete Post
          </button>
        </div>
        <div className="row">
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
