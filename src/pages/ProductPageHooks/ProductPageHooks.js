import React from "react";
import { SearchBox } from "../../components/SearchBox/SearchBox";
//import { SelectBox } from "../../components/SelectBox/SelectBox";
import { Card } from "../../components/Card/Card";

function ProductPageHooks() {
  //const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  //const [searchQuery, setSearchQuery] = React.useState("");
  //const [selectQuery, setSelectQuery] = React.useState("");

  function timeOut(s) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Resquest is taking too long. More than " + s + " seconds...");
      }, s * 1000);
    });
  }

  async function getJSON(url, errorMesaage = "Something went wrong...") {
    try {
      const response = await Promise.race([fetch(url), timeOut(10)]);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${errorMesaage}, ${response.status}, ${data.message}`);
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  // function searchProductHandler(e) {
  //   let query = e.target.value.toLowerCase();
  //   this.setState((prevState) => {
  //     return (prevState.searchQuery = query);
  //   });
  // }

  // function deleteProductHandler(id) {
  //   const cProducts = [...this.state.products];
  //   const index = cProducts.findIndex((el) => el.cca3 === id);
  //   cProducts.splice(index, 1);
  //   this.setState((prevState) => {
  //     return (prevState.products = cProducts);
  //   });
  // }

  // function selectChangeHandler(e) {
  //   this.setState((prevState) => {
  //     return (prevState.selectQuery = e.target.value);
  //   });
  // }

  // function changeNameHandler(id, e) {
  //   let query = e.target.value;

  //   const cProducts = [...this.state.products];
  //   const index = cProducts.findIndex((el) => el.cca3 === id);

  //   const product = Object.assign({}, cProducts[index]);
  //   product.name.common = query;

  //   cProducts[index] = product;

  //   this.setState((prevState) => {
  //     return (prevState.products = cProducts);
  //   });
  // }

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getJSON("https://restcountries.com/v3.1/all");
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  });

  // let fProducts;

  // const fProducts = products.filter((el) =>
  //   el.name.common.toLowerCase().includes(searchQuery)
  // );

  // if (selectQuery === "Select All Continents") {
  //   fProducts = products.filter(
  //     (el) => el.name.common.toLowerCase().indexOf(searchQuery) !== -1
  //   );
  // }

  //

  const previewText = "Please wait while the data has been loaded...";

  return (
    <div className="product-page">
      <Card products={products} />
      {/* <SearchBox searchProductHandler={searchProductHandler} />
      <SelectBox data={fProducts} selectChangeHandler={selectChangeHandler} />
      {isLoading ? (
        previewText
      ) : (
        <Card
          products={fProducts}
          deleteProductHandler={deleteProductHandler}
          changeNameHandler={changeNameHandler}
        />
      )} */}
    </div>
  );
}

export default ProductPageHooks;
