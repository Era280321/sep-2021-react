import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import css from './App.module.css'
import {useState} from "react";
import {postService} from "./services/post.service";

function App() {

    const[user,setUser]=useState([]);

    const[posts, setPosts]=useState([]);

    const getUser = (userArg)=>{
        setUser(userArg);
        setPosts([])
    }

    const getUserId =(idArg)=>{
        postService.getByUserId(idArg).then(value=> setPosts([...value]))
        console.log(idArg)
    }


  return (
    <div>
      <div className={css.wrap}>
        <Users getUser={getUser}/>
          <UserDetails user={user} getUserId={getUserId}/>
      </div>
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
