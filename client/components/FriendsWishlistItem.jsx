import React from 'react';
import axios from 'axios';


class FriendsWishlistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="friends-item">
        <img className="item-pic" src={this.props.item.pic_name} />
         <div className="item-info">
           <p className="item-name">{this.props.item.item_name}</p>
           <p className="item-price">${this.props.item.price}</p>
           <a className="item-link" href={this.props.item.url}>View</a>
         </div>
      </div>

    );
 }
}

export default FriendsWishlistItem;
