import { useState } from "react";
import "./App.css";

//  import from index.js file in components folder
import { Article, CTA, Feature, Navbar, Brand } from "./components/index.JS";

//  import from index .js file in containers folder  to access the components
import {
  Blog,
  Features,
  Header,
  WhatGpt3,
  Footer,
  Possibility,
} from "./containers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="APP">
       <div className="gradient__bg">
          <Navbar />
        <Header />
        </div>
        <Brand />
        <WhatGpt3 /> 
        <Features />
    <Possibility/>
    <CTA/>
        <Blog/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
