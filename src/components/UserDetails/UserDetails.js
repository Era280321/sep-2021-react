import React from 'react';

const UserDetails = ({user,getUserId}) => {

    const {id,name,username,email,phone} = user;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <button onClick={()=>getUserId(id)}>Posts</button>

        </div>
    );
};

export default UserDetails;