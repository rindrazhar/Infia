import React, { Component } from 'react'
import '../css/header.css'
import gambar1 from '../img/Group 382.png'
import gambar2 from '../img/Group 3.jpg'
import gambar3 from '../img/Group 211.png'
import gambar4 from '../img/Group 364.png'
require('typeface-montserrat')

export default class Header extends Component{
  render() {
    return (
      <div className="container1">
        <ul className="list1">
          <li>
            <img src={gambar1} alt="gambar1" />
          </li>
          <li>
            <img src={gambar2} alt="gambar2" />
          </li>
        </ul>
        <ul className="list2">
          <li>
            <img src={gambar3} alt="gambar3" className="gambar3" />
          </li>
          <li>
            <p>Indonesia <br/> Viral Market</p>
            <button className="button"><b>PELAJARI LEBIH LANJUT ></b></button>
          </li>
          <li>
            <img src={gambar4} alt="gambar4" />
          </li>
        </ul>
      </div>

   );
 }
}
