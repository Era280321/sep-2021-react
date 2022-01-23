const Post = ({post: id, userid, title, body}) => {
    console.log({title})
    return (

        <div>
            <div>id: {id}</div>
            <div>userid: {userid}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>

        </div>
    );
};

export default Post;