import React, { Component } from 'react'
import '../css/artikel.css'
import gambar1 from '../img/Group 399.png'
import gambar2 from '../img/Group 402.png'
import gambar3 from '../img/Group 405.png'
import gambar4 from '../img/Group 408.png'

export default class Content4 extends Component{
  render() {
    return (
      <div class="container7">
        <ul class="list1">
            <li>
                <h1><b>ARTIKEL</b></h1>
            </li>
            <li>
                <a href="#">Lihat artikel lainnya <b>></b></a>
            </li>
        </ul>
        <ul class="list2">
            <li>
                <img src={gambar1} alt="gambar1" />
                <p><b>ipsum dolor sit amet consectetur adipisicing elit. Et, architecto repudiandae.</b>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, architecto repudiandae atque inventore modi voluptatibus fugit ipsa
                    accusantium autem dolores odit repellat totam alias laboriosam? Vel, dolor laborum! Voluptatem, totam!
                </p>
                <button class="button button5"><b>BACA LEBIH LANJUT ></b></button>
            </li>
            <li>
                <img src={gambar2} alt="gambar2" />
                <p><b>ipsum dolor sit amet consectetur adipisicing elit. Et, architecto repudiandae.</b>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, architecto repudiandae atque inventore modi voluptatibus fugit ipsa
                    accusantium autem dolores odit repellat totam alias laboriosam? Vel, dolor laborum! Voluptatem, totam!
                </p>
                <button class="button button5"><b>BACA LEBIH LANJUT ></b></button>
            </li>
            <li>
                <img src={gambar3} alt="gambar3" />
                <p><b>ipsum dolor sit amet consectetur adipisicing elit. Et, architecto repudiandae.</b>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, architecto repudiandae atque inventore modi voluptatibus fugit ipsa
                    accusantium autem dolores odit repellat totam alias laboriosam? Vel, dolor laborum! Voluptatem, totam!
                </p>
                <button class="button button5"><b>BACA LEBIH LANJUT ></b></button>
            </li>
            <li>
                <img src={gambar4} alt="gambar4" />
                <p><b>ipsum dolor sit amet consectetur adipisicing elit. Et, architecto repudiandae.</b>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, architecto repudiandae atque inventore modi voluptatibus fugit ipsa
                    accusantium autem dolores odit repellat totam alias laboriosam? Vel, dolor laborum! Voluptatem, totam!
                </p>
                <button class="button button5"><b>BACA LEBIH LANJUT ></b></button>
            </li>
        </ul>
      </div>
   );
 }
}
