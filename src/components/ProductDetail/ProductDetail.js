import React from "react";
import { useParams } from "react-router-dom";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.match.params.id,
      productData: null,
      image_url: null,
      publisher: null,
      title: null,
      ingredients: null,
      source_url: null,
    };
  }

  componentDidMount() {
    const fetchURL = `https://forkify-api.herokuapp.com/api/get?rId=${this.state.productID}`;
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ productData: data });
        this.setState({ image_url: this.state.productData.recipe.image_url });
        this.setState({ publisher: this.state.productData.recipe.publisher });
        this.setState({ title: this.state.productData.recipe.title });
        this.setState({
          ingredients: this.state.productData.recipe.ingredients,
        });
        this.setState({ source_url: this.state.productData.recipe.source_url });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  render() {
    return <div></div>;
  }
}

export default ProductDetail;
