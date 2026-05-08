import Button from "../common/Button";
import { Header } from "../common/Header";
import { ProductCard } from "../common/ProductCard";
import "./Home.css";

function Home() {
  return (
    //HTLM CODE
    <>
      <div>
        <h1>Welcome to Home Component</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
          quod iusto voluptate, autem repellat eum eius voluptas quaerat,
          possimus inventore modi ab amet voluptates veniam commodi assumenda
          recusandae laborum laudantium.
        </p>
        <Button />
      </div>
      <section className="productSection">
        <h1>Our Product</h1>
        <div className="productMid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}


export { Home };
