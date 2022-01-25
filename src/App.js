import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import css from './App.module.css'

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
