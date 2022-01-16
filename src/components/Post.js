
const Post = ({post:id,userid,title,body}) => {
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