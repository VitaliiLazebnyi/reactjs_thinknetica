import React from 'react'
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Title from "./components/Title";

function App(props) {
  return (
      <React.Fragment>
          <Header />
          <Title title={props.title} />
          <Footer />
      </React.Fragment>
  );
}

export default App;
