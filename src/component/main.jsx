import React, { Component } from 'react'
import '../css/main.css'
import gambar1 from '../img/Group 4.png'
import gambar2 from '../img/Group 86.png'

import gambar3 from '../img/Group 120.png'
import gambar4 from '../img/Group 4.png'

import gambar5 from '../img/Group 206.png'
import gambar6 from '../img/Group 163.png'
import gambar7 from '../img/Group 142.png'
import gambar8 from '../img/Group 146.png'
import gambar9 from '../img/Group 181.png'
import gambar10 from '../img/Group 173.png'
import gambar11 from '../img/Group 163(1).png'
import gambar12 from '../img/Group 188.png'

export default class Main extends Component{
  render() {
    return (
    <div className="container2">
      <ul>
        <li>
          <p><b>TENTANG KAMI</b></p>
          <img src={gambar1} alt="gambar1" />
          <p className="p1">Infia Market adalah sebuah distributor <br/> produk online.</p>
          <p className="p2">Infia Market tergabung dalam jaringan Infia Mega Semesta. Hal 
              <br/> yang membedakan Infia Market dengan distributor online lain adalah Infia <br/>
              Market menerapkan konsep Media Commerce.
          </p>
        </li>
        <li>
          <img src={gambar2} alt="gambar2" />
        </li>
      </ul>
      <div class="container3">
        <ul>
          <li>
            <img src={gambar3} alt="gambar3" />
          </li>
          <li>
            <p><b>APA YANG KAMI KERJAKAN?</b></p>
            <img src={gambar4} alt="gambar4" />
            <p class="p1">Konsep Media Commerce masih terbilang baru di Indonesia. 
              Media Commerce adalah konsep berdagang
              dengan menggunakan media sendiri untuk meminimalisir biaya marketing.
            </p>
            <p class="p2">Infia Market didukung oleh jaringan Infia di instagram dengan 
              jumlah followers mencapai 27 juta di seluruh Indonesia
              dengan 1 Milliar impression setiap bulan. Infia Market juga memiliki 1.000 
              jaringan reseller yang tersebar di seluruh
              Indonesia. Penjualan produk Infia Market menyentuh angka 6.000 pcs per 
              hari yang dikirim ke seluruh Indonesia.
            </p>
          </li>
        </ul>
      </div>
      <div class="container4">
        <ul>
          <li>
            <img src={gambar5} alt="gambar5" />
            <p class="p1">BEKERJA DIMANA SAJA</p>
            <p class="p2">Kalian tidak perlu bangun pagi, terjebak macet <br/> 
              dijalan atau hambatan-hambatan
              lain yang <br/> bisa terjadi.
            </p>
          </li>
          <li>
            <img src={gambar6} alt="gambar6" />
            <p class="p1">MODAL TIDAK BESAR</p>
            <p class="p2">Tidak butuh modal sampai belasan juta, <br/> 
              puluhan juta atau bahkan ratusan juta untuk men- <br/> jadi
              pengusaha sukses. Hanya dengan <br/> modal Rp <b>1.500.000</b> 
              kalian sudah <br/> bisa menjadi pengusaha.
            </p>
          </li>
          <li>
            <img src={gambar7} alt="gambar7" />
            <p class="p1">PROSES BERGABUNG SANGAT MUDAH</p>
            <p class="p2">Tidak membutuhkan biaya pendaftaran dan tidak <br/> 
              perlu mengisi form pendaftaran, kalian cukup <br/> hubungi
              Customer Service kami dan melakukan <br/> transaksi.
            </p>
          </li>
          <li>
            <img src={gambar8} alt="gambar8" />
            <p class="p1">JASA TITIP BARANG</p>
            <p class="p2">Kemudahan ini sangat cocok bagi kalian yang sibuk <br/> 
              dan tidak memiliki tempat penyimpanan barang yang <br/>
              memadai. Tim Infia Market bersedia mengemas barang <br/> 
              kamu dan mengirimkannya.
            </p>
          </li>
          <li>
            <img src={gambar9} alt="gambar9" />
            <p class="p1">VIRAL PRODUCT</p>
            <p class="p2">Produk-produk yang dijual Infia Market adalah <br/> 
              produk-produk terpilih dan viral.
            </p>
          </li>
          <li>
            <img src={gambar10} alt="gambar10" />
            <p class="p1">HARGA KOMPETITIF</p>
            <p class="p2">Margin keuntungan yang diberi <br/> Infia Market sangat menguntungkan.</p>
          </li>
          <li>
            <img src={gambar11} alt="gambar11" />
            <p class="p1">MONEY BACK GUARANTEE</p>
            <p class="p2">Kalian tidak perlu takut jika barang yang kalian jual <br/> 
              tidak laku. Infia Market bersedia membeli kembali <br/> barang tersebut,
              sehingga yang kalian nikmatin hanya <br/> keuntungan dan uang kalian tidak akan hilang.
            </p>
          </li>
          <li>
            <img src={gambar12} alt="gambar12" />
            <p class="p1">KONSULTASI 24 JAM</p>
            <p class="p2">Jika ada pertanyaan dan kesulitan dalam <br/> 
              berdagang kalian cukup hubungi tim Infia Market <br/> yang selalu siap sedia
              membantu <br/> penjualan kalian.
            </p>
          </li>
        </ul>
       </div>
    </div>
   );
 }
}
