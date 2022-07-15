import React from "react";
import { Card } from "../components/Card/Card";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
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
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { products } = this.state;

    return (
      <div className="product-page">
        <p>Welcome to Product page...</p>
        <Card products={products} />
      </div>
    );
  }
}

export default ProductPage;
