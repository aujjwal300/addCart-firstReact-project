import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
// import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import React,{useState} from "react";

function App() {
  const productList = [
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
  ]

  let [List, setProductList] = useState(productList)

  const incrementQuanity = (index) =>{
    let newProductList = [...List]
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <ProductList productList={productList} incrementQuanity={incrementQuanity}/>
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
