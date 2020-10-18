import React from "react";

import "./SearchBox.css";
import ProductGrid from "../ProductGrid/ProductGrid.js";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foodName: "", foodData: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ foodName: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    const fetchURL = `https://forkify-api.herokuapp.com/api/search?q=${this.state.foodName}`;
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ foodData: data });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  keyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const fetchURL = `https://forkify-api.herokuapp.com/api/search?q=${this.state.foodName}`;
      fetch(fetchURL)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ foodData: data });
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    }
  }

  displayProductGrid() {
    if (this.state.foodData !== null) {
      return <ProductGrid productList={this.state.foodData} />;
    }
  }

  render() {
    return (
      <div className="SearchContainer">
        <div className="Title">DELICIOUS, SAME PRICE DISHES</div>
        <div className="SubTitle">Search for your favourite food now...</div>
        <div className="Search">
          <input
            type="text"
            name="book-search"
            className="SearchInput"
            placeholder="Search..."
            onChange={this.handleChange}
            onKeyUp={this.keyPress}
          />
          <button className="SearchButton" onClick={this.handleClick}>
            Search
          </button>
        </div>
        <div className="GridContainer">{this.displayProductGrid()}</div>
      </div>
    );
  }
}

export default SearchBox;
