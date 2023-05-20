import React from 'react'
import Image from 'next/image'

export default home
function home() {
  return (
    <>
    {/* Home title */}
    <div className="title text-center text-3xl text-black font-bold">
      <h1 >Restaurant In Indonesia</h1>
    </div>

    {/* Kolom */}
    <div className="kolom-title   p-3  font-bold text-black text-xl">
      <h1>Rekomendasi Populer</h1>
<div className="kolom-gambar p-4">
  <div className="konten-gambar ml-72 flex p-4 gap-6">
    <div className="gambar   font-bold text-black">
      <h1 className='isiGambar text-4xl'>GAMBAR 1</h1>
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      </div>
    </div>
    
  <h1>GAMBAR 2</h1>
  <h1>GAMBAR 3</h1>
  </div>
    <div className="konten-gambar ml-72 flex p-4 gap-6 text-4xl font-bold text-black">
    <h1 className='isiGambar text-4xl'>GAMBAR 4</h1>
    <h1 className='isiGambar text-4xl'>GAMBAR 5</h1>
    <h1 className='isiGambar text-4xl'>GAMBAR 6</h1>
  </div>
</div>
    </div>
    </>
  )
}

