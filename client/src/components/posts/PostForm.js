import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('');

    const submitForm = e => {
        e.preventDefault();
        addPost({ text });
        setText('');
    };

    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Ecrit quelque chose...</h3>
            </div>
            <form className="form my-1" onSubmit={submitForm}>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Créer une publication"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Envoyer" />
            </form>
        </div>
    );
};

export default connect(null, { addPost })(PostForm);
