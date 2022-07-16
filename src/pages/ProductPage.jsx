import React from "react";
import { Card } from "../components/Card/Card";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: [],
      isToggle: true
    };
    //  this.deleteProductHandler = this.deleteProductHandler.bind(this);
  }

  timeOut(s) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Resquest is taking too long. More than " + s + " seconds...");
      }, s * 1000);
    });
  }

  async getJSON(url, errorMesaage = "Something went wrong...") {
    try {
      const response = await Promise.race([fetch(url), this.timeOut(10)]);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${errorMesaage}, ${response.status}, ${data.message}`);
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async componentDidMount() {
    try {
      const data = await this.getJSON("https://restcountries.com/v3.1/all");
      this.setState({ products: data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.error(error);
    }
  }

  // deleteProductHandler() {
  //   console.log(this);
  // }

  deleteProductHandler = (id) => {
    const cProducts = [...this.state.products];
    const index = cProducts.findIndex((el) => el.cca3 === id);
    cProducts.splice(index, 1);
    this.setState((prevState) => {
      return (prevState.products = cProducts);
    });
  };

  render() {
    const { isLoading, products, isToggle } = this.state;
    const cProducts = [...products];
    const previewText = "Please wait while the data has been loaded...";

    return (
      <div className="product-page">
        <button onClick={this.deleteProductHandler}>toogle</button>
        {isToggle ? <p>Welcome to Product page...</p> : <p>Good Bye...</p>}
        {isLoading ? (
          previewText
        ) : (
          <Card
            products={cProducts}
            deleteProductHandler={this.deleteProductHandler}
          />
        )}
      </div>
    );
  }
}

export default ProductPage;
