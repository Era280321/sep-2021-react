import UserDetails from "./components/UserDetails";
import Post from "./components/Post";
import Users from "./components/Users";
import Posts from "./components/Posts";

import css from "./App.module.css";
import {useState} from "react";
import {postService} from "./services/post.service";

function App() {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState(null);

    const getUser=(user)=>{
        setUser(user)

    }

    const getUserId = (id)=>{
postService.getByUserId(id).then(value => setPosts([...value]))
    }

  return (
    <div>
      <div className={css.wrap}>
        <Users getUser={getUser}/>
          {user&&<UserDetails user={user} getUserId={getUserId}/>}
      </div>
        {!!posts.length && <Posts posts={posts}/>}
    </div>
  );
}

export default App;
