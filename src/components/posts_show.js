import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';  

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; //from react-router
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params; //from react-router, destructure concept of es6
        //delete then use callback function to go back to index to show list of posts
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;//refer to as destructuring, take the post variable out from the props, now you can use post constant
        //react does not wait, it will render while retrieving data from api/backend
        if(!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete Post</button>
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

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);