import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
// import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import React,{useState} from "react";

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    }
  ];

  let [productList, setProductList] = useState(products);

  const incrementQuantity = (index) =>{
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  const decrementQuantity = (index) =>{
    let newProductList = [...productList];
    if(newProductList[index].quantity>0)
      newProductList[index].quantity--;
    
    setProductList(newProductList);
  }

  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <ProductList productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity} />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
