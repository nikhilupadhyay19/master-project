import React from "react";

const Card = (prop) => {
  const { products } = prop;
  console.log(prop, products);

  return (
    <div className="card">
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-3">
                <p key={product.cca3}>{product.name.common}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Card };
