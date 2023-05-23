import React from 'react'
import Image from 'next/image'
import pb from "@/lib/pocketbase";

export const getStaticProps = async () => {
  const resultList = await fetch('https://jealous-garage.pockethost.io/api/collections/all_restaurant/records')
  const res = await resultList.json()
  return { props: { res } };
};

export default function home({ res }) {

  res.items.map((value) => {
    console.log(value)
  })

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
              <h1>{res.page}</h1>
              <div className='grid grid-cols-3 gap-3'>
              {res.items.map((value) => {
                return (
                  <div>
                    <h1 className='isiGambar text-4xl'>{value['nama']}</h1>
                        <Image 
                        src={`https://jealous-garage.pockethost.io/api/files/${value["collectionId"]}/${value["id"]}/${value["image"][0]}`}
                        height={200}
                        width={200}
                        />

                    <div className="rating">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                  </div>
                );
              })}
            </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

