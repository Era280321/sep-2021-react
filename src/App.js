import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {


    useEffect(()=>{



    },[]);

    return (
<div>

    <Users/>

    <hr/>

<Posts/>

    <hr/>

<Comments/>

</div>
  );
}

export default App;
