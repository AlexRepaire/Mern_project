import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PostItem from './PostItem';
import PostForm from './PostForm';
import '../../styles/css/Posts.css';

const Posts = ({ post: { posts, loading }, getPosts }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ? <Spinner /> : <Fragment>
        <h1 className='large text-primary'>Publications</h1>
        <p className='lead'>
            <FontAwesomeIcon icon={faUser} />{' '}
            Ecrire une publication pour partager t'es connaissances
        </p>
        <PostForm />
        <div className='posts'>
            {posts.map(post => (
                <PostItem key={post._id} post={post} />
            ))}
        </div>
    </Fragment>;

};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
