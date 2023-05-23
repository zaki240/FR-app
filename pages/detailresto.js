import React from 'react'
import { FiMapPin } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import {MdOutlineAttachMoney} from 'react-icons/md';

export default function detailresto() {
  return (
    <>
    <div className="konten-detail-resto ml-96 flex gap-10">
      <div className="detail-resto-gambar text-3xl text-black font-bold">
      Gambar
        </div>
        <div className="deskripsi-resto text-black py-3">
          <div className="nama-resto flex text-3xl text-black border-b-2 border-black justify-between">
          <h1>
          Restauran agung
          </h1>
             <div>
              3.4
             </div>
          </div>
          <div className="container">

          </div>
          <div className="flex p-2 items-center gap-1">
            <FiMapPin/>
          <h1>alamat: Amerika tenggara jalan mexico deket sungai gangga</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            <MdOutlineAttachMoney/>
          <h1>Di baawah $400,000/orang</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            <BiTime/>
          <h1>Jam Buka: setiap hari kecuali hari Kiamat</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            <FaPhoneSquareAlt/>
          <h1>No Telp: 088008184028930 </h1>
          </div>
          
            <button className="btn btn-wide text-white mt-12">Tulis Review</button>

          </div>  
        
    </div>
    </>
  )
}
