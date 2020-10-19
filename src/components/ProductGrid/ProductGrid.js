import React from "react";

import "./ProductGrid.css";

class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.productList.count,
      recipes: this.props.productList.recipes,
    };
  }

  componentDidUpdate() {
    if (
      this.state.count !== this.props.productList.count ||
      this.state.recipes !== this.props.productList.recipes
    ) {
      this.setState({
        count: this.props.productList.count,
        recipes: this.props.productList.recipes,
      });
    }
  }

  displayGrid() {
    return (
      <div>
        <div className="ProductSum">There are {this.state.count} results</div>
        <div className="GridContainer">
          {this.state.recipes.map((item) => {
            return (
              <div className="GridItem" key={item.recipe_id}>
                <img
                  className="ItemImg"
                  src={item.image_url}
                  alt={item.recipe_id}
                />
                <div className="ItemTitle">{item.title}</div>
                <button className="DetailButton">Details</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return this.displayGrid();
  }
}

export default ProductGrid;
