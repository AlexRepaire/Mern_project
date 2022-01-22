import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, deleteLike, deletePost } from '../../actions/post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';

const PostItem = ({ auth, post: { _id, text, name, avatar, user, likes, comments, date }, showActions, addLike, deleteLike, deletePost }) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${user}`}>
                    <img
                        className="round-img"
                        src={avatar}
                        alt="photo de profile"
                    />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">{text}</p>
                <p className="post-date">
                    Publié le <Moment format='DD/MM/YYYY'>{date}</Moment>
                </p>
                {showActions && <Fragment>
                    <button type="button" className="btn btn-light" onClick={() => addLike(_id)}>
                        <FontAwesomeIcon icon={faThumbsUp} />{' '}
                        <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                    </button>
                    <button type="button" className="btn btn-light" onClick={() => deleteLike(_id)}>
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </button>
                    <Link to={`/private/posts/${_id}`} className="btn btn-primary">
                        Commentaires {comments.length > 0 && (<span className='comment-count'>{comments.length}</span>)}
                    </Link>
                    {!auth.loading && user === auth.user._id && (
                        <button type="button" className="btn btn-danger" onClick={() => deletePost(_id)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    )}
                </Fragment>}

            </div>
        </div>
    );
};

PostItem.defaultProps = {
    showActions: true
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, deleteLike, deletePost })(PostItem);
