import React from 'react';

const Post = ({post:{id,userId,title,body}}) => {
    return (
        <div>
          <div>Id: {id}</div>
          <div>User Id: {userId}</div>
          <div>Title: {title}</div>
          <div>body: {body}</div>
        </div>
    );
};

export default Post;