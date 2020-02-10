import React from 'react';

import './PostItem.css';

function PostHeader({ author, date }) {
    return (
        <div className="post-header">
            <img src={author.avatar} alt="avatar" className="user-avatar" />
            <div className="info">
                <h3>{author.name}</h3>
                <p>{date}</p>
            </div>
        </div>
    );
}

function PostComments({ comments }) {
    return (
        <div className="post-comment">
            <div className="comment-line"></div>
            {comments.map(comment => (
                <div className="comment">
                    <img
                        className="user-avatar"
                        src={comment.author.avatar}
                        alt="comments-avatar"
                    />
                    <p>
                        <span>{comment.author.name}</span>
                        {comment.content}
                    </p>
                </div>
            ))}
        </div>
    );
}

function PostItem({ author, date, content, comments }) {
    return (
        <div className="post">
            <PostHeader author={author} date={date} />
            <p className="post-content">{content}</p>
            <PostComments comments={comments} />
        </div>
    );
}

export default PostItem;
