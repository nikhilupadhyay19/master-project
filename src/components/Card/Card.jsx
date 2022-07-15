import React from "react";

const Card = (prop) => {
  const { products } = prop;
  console.log(prop, products);

  return (
    <div className="card">
      <p>Card Component</p>
    </div>
  );
};

export { Card };
