import UserDetails from "./components/UserDetails";
import Post from "./components/Post";
import Users from "./components/Users";
import Posts from "./components/Posts";

import css from "./App.module.css";

function App() {
  return (
    <div>
      <div className={css.wrap}>
        <Users/>
        <UserDetails/>
      </div>
        <Posts/>
    </div>
  );
}

export default App;
