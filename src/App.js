import React from "react";
import Home from "./Components/Leftbar/Home/Home";
import Explore from "./Components/Leftbar/Explore/Explore";
import Notification from "./Components/Leftbar/Notifications/Notification";
import Messages from "./Components/Leftbar/Messages/Messages";
import Bookmarks from "./Components/Leftbar/Bookmarks/Bookmarks";
import Lists from "./Components/Leftbar/Lists/Lists";
import Profile from "./Components/Leftbar/Profile/Profile";
import More from "./Components/Leftbar/More/More";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="main_nav">
            <div className="data">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/Explore" exact>
            <Explore/>
          </Route>
          <Route path="/Notification" exact>
            <Notification/>
          </Route>
          <Route path="/Messages" exact>
            <Messages/>
          </Route>
          <Route path="/Bookmarks" exact>
            <Bookmarks/>
          </Route>
          <Route path="/Lists" exact>
            <Lists/>
          </Route>
          <Route path="/Profile" exact>
            <Profile/>
          </Route>
          <Route path="/More" exact>
            <More/>
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
