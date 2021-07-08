import React, { Component } from "react";
import { observer } from "mobx-react";

class Item extends Component {
  checkItem = () => {
    //your code here
  };
  editItem = () => {
    //your code here
  };
  deleteItem = () => {
    //your code here
  };
  /*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */
  render() {
    return (
      <div className={this.props.store.item.completed ? "crossed" : null}>
        <input type="checkbox" value={this.props.store.item.name} />
        {this.props.store.item.name}
      </div>
    );
  }
}

export default observer(Item);
