import React from "react";
import Header from "./components/header";
import './app.scss'
import Headline from './components/headline'

function App() {
  return (
    <div >
     <Header/>
     <section className="main">
       <Headline header="POSTS" desc="Click the button to render posts"/>

     </section>
    </div>
  );
}

// npm i node-sass

export default App;
