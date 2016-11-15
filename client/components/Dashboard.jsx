import React from 'react';
import Feed from './Dash/Feed.jsx';
import QueryBox from './Dash/QueryBox.jsx';
import Social from './Dash/Social.jsx';
import ImageUpload from './Dash/ImageUpload.jsx';

class Dashboard extends React.Component {
  constructor(props) {
      super(props);
  }

   render() {
      return (
        <div>
          <ImageUpload user={this.props.user}/>
          <QueryBox user={this.props.user}/>
          <Feed user={this.props.user} feed={this.props.feed} setFeed={this.props.setFeed}/>
          <Social user={this.props.user}/>
        </div>
      );
   }
}

export default Dashboard;
