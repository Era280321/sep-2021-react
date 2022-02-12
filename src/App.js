import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import css from './App.module.css'
import {useState} from "react";
import {postService} from "./services/post.service";
import {albumService} from "./services/album.service";
import Albums from "./components/Albums/Albums";

function App() {

    const [user, setUser] = useState([]);

    const [posts, setPosts] = useState([]);

    const [albums, setAlbums] = useState([])

    const getUser = (userArg) => {
        setUser(userArg);
        setPosts([])
        setAlbums([])
    }

    const getUserId = (idArg) => {
        postService.getByUserId(idArg).then(value => setPosts([...value]))
        setAlbums([])
    }

    const getAlbums = (idArg) => {
        albumService.getByUserId(idArg).then(value => setAlbums([...value]))
        setPosts([])
    }


    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                <UserDetails user={user} getUserId={getUserId} getAlbums={getAlbums}/>
            </div>
            <Posts posts={posts}/>
            <Albums albums={albums}/>

        </div>
    );
}

export default App;
