import React from 'react';
import FeedItem from './FeedItem.jsx';
import axios from 'axios';

var count = 0;

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {offset: count, fts: this.props.gender, limit: 50}
    }
  }

  componentDidMount() {
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    axios.post("/api/shopstyle", {offset: count, fts: gender, limit: 50})
    .then(function (response) {
      context.props.setFeed(response.data.products);
    })
    .catch(function (error) {
      console.log('Error in sending ajax data ', error);
    });
  }

  componentDidUpdate() {
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    axios.post("/api/shopstyle", {offset: count, fts: gender, limit: 50})
    .then(function (response) {
      context.props.setFeed(response.data.products);
    })
    .catch(function (error) {
      console.log('Error in sending ajax data ', error);
    });
  }



  checkQueryType(updatedCount, callback) {
    if (this.props.feedType === 'upload') {
      this.setState({ query: {offset: updatedCount, fts: gender + '+' + this.props.searchQuery, limit: this.props.limit}});
    } else if (this.props.feedType ==='query') {
      this.setState({ query: {offset: updatedCount, fts: gender + '+' + this.props.brand + '+' + this.props.item, limit: this.props.limit}});
    } else {
      this.setState({query: {offset: updatedCount, fts: this.props.gender, limit: 50}});
    }
    console.log(this.state.query.offset, 'count in query is this');
    callback();

  }

  queryAPI() {
    var setFeed = this.props.setFeed;
    var feedType = this.props.feedType
    console.log(this, 'this in queryAPI');
    axios.post("/api/shopstyle", this.state.query)
      .then(function (response) {
        setFeed(response.data.products, feedType);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
  }

  next() {
    //check feedType props to see if query or image upload or default
    //increment count by 50
    console.log('in next');
    count = count + 50;
    // this.setState({
    //   count: newCount
    // });
    console.log(count, 'newCount');
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    console.log('before checking query');
    this.checkQueryType(count, function() {
      console.log('before api query');
      context.queryAPI();
    });
  }

  previous() {
    count = count - 50;
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    this.checkQueryType(count, function() {
      console.log('before api query');
      context.queryAPI();
    });
  }
  render() {

    return (
      <div className="feed">
        <div className="feed-container">{this.props.user.name + "'s"} Feed
          <div className="recommended-items">
            <button className="sort-btn" onClick={this.props.sortPrice}>Price</button>
            <button className="sort-btn" onClick={this.props.sortBrand}>Retailer</button>
            <button className="sort-btn" onClick={this.props.sortCat}>Category</button>
          </div>
        </div>
        <br />
        <div className="button-container">
          <button className="show-previous" onClick={this.previous.bind(this)}>{count === 0 ? '' : 'Previous'}</button>
          <button className="show-more" onClick={this.next.bind(this)}>Next</button>
        </div>
        <br />
        <div className="feed-items">
          {this.props.feed.map((item, i) =>
            <FeedItem item={item} key={item.id} user={this.props.user}/>
          )}
        </div>
        <br />
      </div>
    );
  }
}

export default Feed;
