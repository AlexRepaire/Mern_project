import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import { useParams, Link } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading } }) => {
    const { id } = useParams();
    useEffect(() => {
        getPost(id);
    }, [id]);

    return loading || post === null ? (<Spinner />) : (<Fragment>
        <Link to={'/private/posts'} className='btn'>Retour</Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div className='comments'>
            {post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id} />
            ))}
        </div>
    </Fragment>)
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
