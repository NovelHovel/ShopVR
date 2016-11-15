import React from 'react';
import FeedItem from './FeedItem.jsx';
import axios from 'axios';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women"
    axios.get("http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&fts=" + gender + "&limit=25")
    .then(function (response) {
      context.props.setFeed(response.data.products);
    })
    .catch(function (error) {
      console.log('asdfError in sending ajax data ', error);
    });
  }

   render() {
      return (
        <div>
          <h1>Your Recommendations</h1>
          {this.props.feed.map((item) =>
            <FeedItem item={item} key={item.id}/>
          )}
        </div>
      );
   }
}

export default Feed;
