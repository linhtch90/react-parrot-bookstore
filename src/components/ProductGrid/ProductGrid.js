import React from "react";

class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { productData: this.props.productList};
  }

  // displayGrid() {
  //   this.state.productData.map((productItem) => {
  //     return (
  //       <div className="ProductContainer">
  //         <img
  //           className="ProductPhoto"
  //           src={productItem.image_url}
  //           alt="product-photo"
  //         />
  //         <div className="ProductTitle">
  //           <p>{productItem.title}</p>
  //         </div>
  //         <button className="DetailButton">More Details</button>
  //       </div>
  //     );
  //   });
  // }

  render() {
      return (
          <>
          <div>There are {this.props.productList.count} results</div>
            <div>{this.props.productList.recipes.map(item => item.title)}</div>
          </>
      );
  }
}

export default ProductGrid;
