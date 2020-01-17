import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      addedItem: []
    };
    this.addItem = this.addItem.bind(this);
    // this.displayAddedItem = this.displayAddedItem.bind(this);
  }

  addItem(i) {
    const addItem = [...this.state.addedItem];
    addItem.push(this.props.cards[i]);
    this.setState({
      addedItem: addItem
    });
    console.log(addItem);
  }
  /*
  displayAddedItem() {
    const addItm = this.state.addedItem.map((item, i) => {
      return <h1>{item.course}</h1>;
    });
  }
*/
  render() {
    const addItm = this.state.addedItem.map((item, i) => {
      return <h1 key={i}>{item.course}</h1>;
    });
    const cardsArray = this.props.cards.map((card, i) => {
      return (
        <div className="col s2" key={i}>
          <Card card={card} key={i} className="col s3" />
          <button
            onClick={() => {
              this.addItem(i);
            }}
          >
            Add Item
          </button>
        </div>
      );
    });
    console.log(this.props);
    return (
      <div>
        {cardsArray}
        <h1>{addItm}</h1>
      </div>
    );
  }
}

export default CardList;
