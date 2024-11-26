import "./App.css";
import { CardHeader } from "./components/product/CardHeader";
import { useProductsRequest } from "./hooks/useFetch";

function App() {
  const { products } = useProductsRequest();

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {products?.map((product) => (
        <div style={{ minWidth: "20%", width: "20%" }}>
          <CardHeader 
            image={product.image}
            description={product.description}
            title={product.title}
          />
          <div>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h4>Rating</h4>
            <p>
              {product.rating.rate} <span>({product.rating.count})</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
