import React from "react";

const Card = (prop) => {
  const { products, deleteProductHandler } = prop;
  console.log(prop, products);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-lg-3" key={product.cca3}>
              <div className="card">
                <button onClick={() => deleteProductHandler(product.cca3)}>
                  <i className="icofont icofont-ui-delete"></i>
                </button>
                <p>{product.name.common}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Card };
