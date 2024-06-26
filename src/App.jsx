import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="container  shadow p-3 mb-5 bg-body-tertiary rounded  ">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
