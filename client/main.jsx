import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import VRview from './components/VRview.jsx';
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';
import Setting from './components/setting.jsx';
import SharedView from './components/SharedView.jsx';
import Friends from './components/Friends.jsx';
import SharedWishlist from './components/SharedWishlist.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/vr" component={VRview} />
      <Route path="/friends" component={Friends} />
      <Route path="/:userid" component={SharedWishlist} />
    </Route>
    <Route path="/view" component={SharedView} />
  </Router>
), document.getElementById('app'));
