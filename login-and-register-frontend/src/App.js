import './App.css'
import Homepage1 from "./components/homepage1/homepage1"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import MainPage from './components/main/main';
import Chat from './components/chat/chat';
import Homepage from './components/homepage/homepage';

function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("myUser5")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("myUser5", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            {
              user && user._id ? <Homepage1 updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/chat">
            <Chat />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

