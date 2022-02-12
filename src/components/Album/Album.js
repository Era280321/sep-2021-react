import React from 'react';

const Album = ({album:{userId,id,title}}) => {
    return (
        <div>
            <div>User Id: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export default Album;