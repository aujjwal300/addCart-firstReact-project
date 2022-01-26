import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
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
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const decrementQuantity = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const resetQuantity = () => {
    let newProductList = [...productList];

    newProductList.map((product) => {product.quantity = 0});

    setTotalAmount(0);
    setProductList(newProductList);
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newTotalAmount -= newProductList[index].price*newProductList[index].quantity;
    newProductList.splice(index, 1);

    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <ProductList productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}/>
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
