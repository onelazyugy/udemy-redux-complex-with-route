import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; //from react-router
        this.props.fetchPost(id);
    }

    render() {
        const { post } = this.props;//refer to as destructuring, take the post variable out from the props, now you can use post constant
        if(!post) {
            return <div> Loading...</div>;
        }
        
        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) { //ownProps is props available to this component when this component get created
    //posts is a big list of all posts
    //we only want a single post
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);