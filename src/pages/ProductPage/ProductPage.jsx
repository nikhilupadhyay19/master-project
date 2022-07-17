import React from "react";
import { Card } from "../../components/Card/Card";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { SelectBox } from "../../components/SelectBox/SelectBox";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: [],
      searchQuery: "",
      selectQuery: "Select All Continents",
      changeNameQuery: ""
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

  searchProductHandler = (e) => {
    let query = e.target.value.toLowerCase();
    this.setState((prevState) => {
      return (prevState.searchQuery = query);
    });
  };

  deleteProductHandler = (id) => {
    const cProducts = [...this.state.products];
    const index = cProducts.findIndex((el) => el.cca3 === id);
    cProducts.splice(index, 1);
    this.setState((prevState) => {
      return (prevState.products = cProducts);
    });
  };

  selectChangeHandler = (e) => {
    this.setState((prevState) => {
      return (prevState.selectQuery = e.target.value);
    });
  };

  changeNameHandler = (id, e) => {
    let query = e.target.value;

    const cProducts = [...this.state.products];
    const index = cProducts.findIndex((el) => el.cca3 === id);

    const product = Object.assign({}, cProducts[index]);
    product.name.common = query;

    cProducts[index] = product;

    this.setState((prevState) => {
      return (prevState.products = cProducts);
    });
  };

  async componentDidMount() {
    try {
      const data = await this.getJSON("https://restcountries.com/v3.1/all");
      this.setState({ products: data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState((prevState, prevProps) => {
        return (prevState.products = this.state.products.filter(
          (el) =>
            el.name.common.toLowerCase().indexOf(this.state.searchQuery) !== -1
        ));
      });
    }
  }

  render() {
    let fProducts;
    const { isLoading, products, searchQuery, selectQuery } = this.state;

    // const fProducts = products.filter((el) =>
    //   el.name.common.toLowerCase().includes(searchQuery)
    // );

    if (selectQuery === "Select All Continents") {
      fProducts = products.filter(
        (el) => el.name.common.toLowerCase().indexOf(searchQuery) !== -1
      );
    }
    //

    const previewText = "Please wait while the data has been loaded...";

    return (
      <div className="product-page">
        <SearchBox searchProductHandler={this.searchProductHandler} />
        <SelectBox
          data={fProducts}
          selectChangeHandler={this.selectChangeHandler}
        />
        {isLoading ? (
          previewText
        ) : (
          <Card
            products={fProducts}
            deleteProductHandler={this.deleteProductHandler}
            changeNameHandler={this.changeNameHandler}
          />
        )}
      </div>
    );
  }
}

export default ProductPage;
