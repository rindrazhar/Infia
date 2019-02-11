import React, { Component } from 'react';
import Header from './component/header'
import Main from './component/main'
import Produk from './component/produk'
import Artikel from './component/artikel'
import Footer from './component/footer'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Produk/>
        <Artikel/>
        <Footer/>
      </div>
    );
  }
}

export default App;
