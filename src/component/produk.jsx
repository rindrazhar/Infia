import React, { Component } from 'react'
import '../css/produk.css'
import gambar1 from '../img/Group 4.png'
import gambar2 from '../img/Rectangle 149.png'
import gambar3 from '../img/Rectangle 73.png'
import gambar4 from '../img/Group 195.png'
import gambar5 from '../img/Group 190.png'
import gambar6 from '../img/Group 189.png'
import gambar7 from '../img/Group 196.png'
import gambar8 from '../img/Group 202.png'

export default class Produk extends Component{
  render() {
    return (
      <div class="container5">
        <div class="judul">
          <h1> <b>PRODUK UNGGULAN</b> </h1>
          <span><img src={gambar1} alt="gambar2" /></span>
        </div>
        <ul className="konten">
          <li>
            <img src={gambar2} alt="gambar2" />
            <p>GENTLE FEVER</p>
          </li>
          <li>
            <img src={gambar2} alt="gambar2" />
            <p>GENTLE FEVER</p>
          </li>
          <li>
            <img src={gambar2} alt="gambar2" />
            <p>GENTLE FEVER</p>
          </li>
          <li>
            <img src={gambar2} alt="gambar2" />
            <p>GENTLE FEVER</p>
          </li>
          <li>
            <img src={gambar2} alt="gambar2" />
            <p>GENTLE FEVER</p>
          </li>
        </ul>
       <div class="container6">
        <h1><b>PRODUK KAMI TERSEDIA DI</b></h1>
        <ul>
          <li>
            <img src={gambar3} alt="gambar3" />
          </li>
          <li>
            <img src={gambar4} alt="gambar4" />
          </li>
          <li>
            <img src={gambar5} alt="gambar5" />
          </li>
          <li>
            <img src={gambar6} alt="gambar6" />
          </li>
          <li>
            <img src={gambar7} alt="gambar7" />
          </li>
          <li>
            <img src={gambar8} alt="gambar8" />
          </li>
        </ul>
       </div>
      </div>
   );
 }
}
