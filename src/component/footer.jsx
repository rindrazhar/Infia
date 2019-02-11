import React, { Component } from 'react'
import '../css/footer.css'
import gambar1 from '../img/Group 382.png'
import gambar2 from '../img/Group 42.png'
import gambar3 from '../img/Path 30.png'
import gambar4 from '../img/Path 31.png'

export default class Footer extends Component{
  render() {
    return (
      <div class="container8">
        <ul>
          <li>
            <img src={gambar1} alt="gambar1" />
          </li>
          <li>
            <p><b>VIRAL PRODUCT</b><br/>
              Contact us on Line@: @infia_market (use @) <br/>
              Info reseller hubungi: 0817-276-919 / 0859-2005-7451
            </p>
          </li>
          <li>
            <p><b>FOLLOW US ON</b></p>
            <img src={gambar2} alt="gambar2" />
            <img src={gambar3} alt="gambar3" />
            <img src={gambar4} alt="gambar4" />
          </li>
        </ul>
      </div>
   );
 }
}
