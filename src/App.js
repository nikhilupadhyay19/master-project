import "./styles.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import LifeCycleMethods from "./pages/LifeCycleMethods/LifeCycleMethods";
import ProductPageHooks from "./pages/ProductPageHooks/ProductPageHooks";

export default function App() {
  return (
    <div className="App">
      {/* <ProductPage /> */}
      <ProductPageHooks />
      <LifeCycleMethods />
    </div>
  );
}
